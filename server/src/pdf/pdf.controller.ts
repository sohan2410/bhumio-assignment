import { Controller, Get, Patch, UploadedFile, UseInterceptors, Res } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Blob } from 'buffer'
import { Response } from 'express'
import { PdfService } from './pdf.service'
@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfsService: PdfService) {}
  @Get()
  async getPdf(@Res() res: Response) {
    const pdf = await this.pdfsService.getPdf()
    if (!pdf) return res.status(204).json({ message: 'No PDF found' })
    res.setHeader('Content-Type', 'application/pdf')
    res.send(pdf.data)
  }

  @Patch()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file) {
    const blob = new Blob([file.buffer as Blob], { type: 'application/pdf' })
    const pdf = await this.pdfsService.createPdf(file.buffer)
    return pdf
  }
}
