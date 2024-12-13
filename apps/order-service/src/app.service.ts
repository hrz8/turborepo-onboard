import { Injectable } from '@nestjs/common';
import { logger } from '@onboarding/logger';
import { generate } from '@onboarding/rando';

@Injectable()
export class AppService {
  getHello(): string {
    logger.info("Hello, there!")
    return `Hello, ${generate()}`;
  }
}
