import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Pdf } from 'src/models/pdf.entity'
@Injectable()
export class PdfService {
  constructor(
    @InjectRepository(Pdf)
    private readonly pdfRepository: Repository<Pdf>,
  ) {}

  async getPdf() {
    const pdf = await this.pdfRepository.findOneBy({ name: 'example.pdf' })
    return pdf
  }
  async createPdf(data: any): Promise<Pdf> {
    const pdf = await this.pdfRepository.findOneBy({ name: 'example.pdf' })
    if (!pdf) {
      const newPdf = this.pdfRepository.create({ name: 'example.pdf', data })
      return this.pdfRepository.save(newPdf)
    }
    pdf.data = data
    return this.pdfRepository.save(pdf)
  }
}
