import { Module } from '@nestjs/common'
import { UploadService } from './upload.service'
import { UploadResolver } from './upload.resolver'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5
      })
    })
  ],
  providers: [UploadService, UploadResolver],
  exports: [UploadService]
})
export class UploadModule {}
