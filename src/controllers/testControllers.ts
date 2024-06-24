import { Request, Response } from 'express';
import { getTraitByRace } from '../services/testService';
import { RaceEnum } from '../constants/constants';

export const handleTest = async (req: Request, res: Response) => {
  const traits = await getTraitByRace(RaceEnum.Dwarf);

  res.json(traits);
};
