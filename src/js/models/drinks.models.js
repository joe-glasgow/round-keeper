// Drinks Model
var drinksModel = function () {
   var drinks = [
        {
            name: 'Whiskey Beams',
            friendlyName: 'whiskey-beams',
            cost: '3.59',
            drinksPackages: ['A','C']
        },
        {
            name: 'Corellian Brandy',
            friendlyName: 'corellian-brandy',
            cost: '4.29',
            drinksPackages: ['A', 'B']
        },
        {
            name: 'Slurm Beer',
            friendlyName: 'slurm-beer',
            cost: '2.59',
            drinksPackages: ['B', 'C']
        },
        {
           name: 'Solo Carbonite',
           friendlyName: 'solo-carbonite',
           cost: '3.79',
           drinksPackages: ['C', 'B']
        },
        {
           name: 'Risa Wine Small',
           friendlyName: 'risa-wine-small',
           cost: '2.89',
           drinksPackages: ['A', 'C']
        },
        {
           name: 'Risa Wine Large',
           friendlyName: 'risa-wine-large',
           cost: '3.69',
           drinksPackages: ['A', 'B']
        }
    ]

    return drinks;
};
// Export pubs model
module.exports = drinksModel;