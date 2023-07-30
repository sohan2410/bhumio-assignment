// import './App.css';
import WebViewer from "@pdftron/webviewer"
import { useRef } from "react"
import axios from "axios"

function App() {
  const viewerDiv = useRef(null)

  const handleLoad = async (e) => {
    e.preventDefault()
    console.log("first")
    const res = await axios.get(`http://localhost:8000/pdf`)

    console.log(typeof res.data)

    WebViewer({ path: "/lib", initialDoc: "http://localhost:8000/pdf" }, viewerDiv.current).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core

      instance.UI.setHeaderItems((header) => {
        header.push({
          type: "actionButton",
          img: "/save.png",
          name: "Save pdf",
          onClick: async () => {
            const doc = documentViewer.getDocument()
            const xfdfString = await annotationManager.exportAnnotations()
            const data = await doc.getFileData({
              xfdfString,
            })
            const arr = new Uint8Array(data)
            const blob = new Blob([arr], { type: "application/pdf" })
            const form = new FormData()
            form.append("file", blob, "example.pdf")
            const res = await axios.patch(`http://localhost:8000/pdf`, form)
          },
        })
      })

      documentViewer.addEventListener("documentLoaded", () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser(),
        })
        annotationManager.addAnnotation(rectangleAnnot)
        annotationManager.redrawAnnotation(rectangleAnnot)
      })
    })
  }

  return (
    <div className="App">
      <button style={{ cursor: "pointer" }} onClick={(e) => handleLoad(e)}>
        Load pdf
      </button>

      <div style={{ height: "100vh" }} className="webviewer" ref={viewerDiv}></div>
    </div>
  )
}

export default App
