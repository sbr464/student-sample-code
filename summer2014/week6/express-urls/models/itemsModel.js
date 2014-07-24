// This is our data model for the view.
//  We are using an array of objects to
//  help keep all our data together so that we
//  can still sort and manage the list without
//  losing the connection of properties.
var dataSet = [
  {
    title: 'Item 1',
    id: 'item-1',
    desc: 'This is item 1'
  },
  {
    title: 'Item 2',
    id: 'item-2',
    desc: 'This is item 2'
  },
  {
    title: 'Item 3',
    id: 'item-3',
    desc: 'This is item 3'
  },
  {
    title: 'Item 4',
    id: 'item-4',
    desc: 'This is item 4'
  }
];

// Make this available to any file that 'requires' this one
module.exports = dataSet;