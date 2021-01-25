import { Request, Response } from 'express';
import shortid from 'shortid';
import validUrl from 'valid-url';
import CodefyService from '@services/codefy';
import { Codefy } from '@models/codefy';

class ContextController {
  async getShort(req: Request, res: Response) {
    try {
      const { url } = req.query;
      if (!url) return res.status(400).json({ error: 'Url to shortify is missing' });

      if (!validUrl.isUri(url)) return res.status(400).json({ error: 'Invalid url' });

      const token = shortid.generate();

      const saved = await CodefyService.saveUrl(url, token);

      if (saved) {
        return res.status(200).json({
          token,
          rawUrl: url,
          shortUrl: `${process.env.BASE_URL}/${token}`,
        });
      }

      return res.status(500).json({ error: 'Failed to generate short url' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }

  async redirectUrl(req: Request, res: Response) {
    const { token } = req.params;

    const codefy: Codefy = await CodefyService.getUrl(token);

    if (codefy && codefy.active) return res.redirect(codefy.url);

    return res.status(404).json({ error: 'No url found' });
  }
}

export default new ContextController();
