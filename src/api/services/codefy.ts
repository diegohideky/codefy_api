import { getRepository, Repository } from 'typeorm';
import { Codefy } from '@models/codefy';

class CodefyService {
  async getUrl(token: string): Promise<Codefy> {
    const codefyRepository: Repository<Codefy> = getRepository(Codefy);
    const codefy: Codefy = await codefyRepository.findOne({
      where: {
        token,
      },
    });
    // Increment count
    // if (codefy) await codefyRepository.update(codefy.id, { count: +codefy.count + 1 });
    return codefy;
  }

  async saveUrl(url: string, token: string): Promise<Codefy> {
    try {
      const contextRepository: Repository<Codefy> = getRepository(Codefy);

      return contextRepository.save({
        url,
        token,
        active: true,
      });
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async findOne(params): Promise<Codefy> {
    const codefyRepository: Repository<Codefy> = getRepository(Codefy);
    return codefyRepository.findOne({ where: params });
  }

  async save(codefy: Codefy): Promise<Codefy> {
    const codefyRepository: Repository<Codefy> = getRepository(Codefy);
    return codefyRepository.save(codefy);
  }
}

export default new CodefyService();
