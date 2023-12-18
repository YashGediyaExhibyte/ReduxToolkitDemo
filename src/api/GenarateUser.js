import Chance from "chance";

const chance = Chance();

export const FakeUserData = () => {
  return chance.name({ middle: true });
};
