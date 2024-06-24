import { eq } from 'drizzle-orm';
import { Race } from '../constants/constants';
import { db } from '../db';
import { racesTable } from '../db/schemas/races';
import { traitsToRaceTable } from '../db/schemas/traits';

export const getTraitByRace = async (race: Race) => {
  try {
    console.log('Getting the race traits with race name', race);
    const raceRow = await db.query.racesTable.findFirst({
      where: eq(racesTable.name, race),
    });

    if (!raceRow) {
      throw new Error('Race not found!');
    }

    console.log(`Race found:  ${raceRow.name} with id ${raceRow.id}`);
    console.log(`Getting traits for ${raceRow.name}... `);

    const traits = await db.query.traitsToRaceTable.findMany({
      columns: {
        traitId: false,
        raceId: false,
      },
      with: {
        trait: {
          columns: {
            name: true,
            caracteristics: false,
            modifier: false,
            description: true,
          },
        },
      },
      where: eq(traitsToRaceTable.raceId, raceRow.id),
    });

    if (!traits) {
      throw new Error('Traits not found!');
    }

    console.log(`Traits found for ${raceRow.name}!, returning...`);

    return traits.map((trait) => trait.trait);
  } catch (error) {
    console.log('Error in getTraitByRace');
    console.error(error);
  }
};
