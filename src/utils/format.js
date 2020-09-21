export function formatPopulation(population) {
  if (typeof population === 'number') {
    return population.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  }

  return population;
};

export default formatPopulation;