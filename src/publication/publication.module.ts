import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Publication } from './entities/publication.entity';

@Module({
  imports: [SequelizeModule.forFeature([Publication])],
  controllers: [PublicationController],
  providers: [PublicationService],
})
export class PublicationModule {}
