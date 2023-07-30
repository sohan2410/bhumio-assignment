import { Module } from '@nestjs/common'
import { PdfController } from './pdf.controller'
import { PdfService } from './pdf.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Pdf } from 'src/models/pdf.entity'
@Module({
  imports: [TypeOrmModule.forFeature([Pdf])],
  controllers: [PdfController],
  providers: [PdfService],
})
export class PdfModule {}
