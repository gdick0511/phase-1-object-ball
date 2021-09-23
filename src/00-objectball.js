function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: '0',
                    shoe: '16',
                    points: '22',
                    rebounds: '12',
                    assists: '12',
                    steals: '3', 
                    blocks: '1',
                    'Slam Dunks': '1'
                },
                'Reggie Evans': {
                    number: '30',
                    shoe: '14',
                    points: '12',
                    rebounds: '12',
                    assists: '12',
                    steals: '12', 
                    blocks: '12',
                    'Slam Dunks': '7'
                },
                'Brook Lopez': {
                    number: '11',
                    shoe: '17',
                    points: '17',
                    rebounds: '19',
                    assists: '10',
                    steals: '3', 
                    blocks: '1',
                    'Slam Dunks': '15'
                },
                'Mason Plumlee': {
                    number: '1',
                    shoe: '19',
                    points: '26',
                    rebounds: '12',
                    assists: '6',
                    steals: '3', 
                    blocks: '8',
                    'Slam Dunks': '5'
                },
                'Jason Terry': {
                    number: '31',
                    shoe: '15',
                    points: '19',
                    rebounds: '2',
                    assists: '2',
                    steals: '4', 
                    blocks: '11',
                    'Slam Dunks': '1'
                }
            },
            
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoisw', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: '4',
                    shoe: '18',
                    points: '10',
                    rebounds: '1',
                    assists: '1',
                    steals: '2', 
                    blocks: '7',
                    'Slam Dunks': '2'
                },
                'Bismak Biyombo': {
                    number: '0',
                    shoe: '16',
                    points: '12',
                    rebounds: '4',
                    assists: '7',
                    steals: '7', 
                    blocks: '15',
                    'Slam Dunks': '10'
                },
                'DeSagna Diop': {
                    number: '2',
                    shoe: '14',
                    points: '24',
                    rebounds: '12',
                    assists: '12',
                    steals: '4', 
                    blocks: '5',
                    'Slam Dunks': '5'
                },
                'Ben Gordon': {
                    number: '8',
                    shoe: '15',
                    points: '33',
                    rebounds: '3',
                    assists: '2',
                    steals: '1', 
                    blocks: '1',
                    'Slam Dunks': '0'
                },
                'Brendan Haywood': {
                    number: '33',
                    shoe: '15',
                    points: '6',
                    rebounds: '12',
                    assists: '12',
                    steals: '22', 
                    blocks: '5',
                    'Slam Dunks': '12'
                }

            }
        }
    }
}

let object = gameObject()



function numPointsScored(name) {
    let filtered = Object.keys(object['home']['players']).filter(function(element){
        return element === name;
    })
    console.log(filtered)
    if (filtered[0] === name) {
        return object['home']['players'][name].points;
    } else {
        return object['away']['players'][name].points;
    }
}

function shoeSize(name) {
    let filtered = Object.keys(object['home']['players']).filter(function(element){
        return element === name;
    })
    console.log(filtered)
    if (filtered[0] === name) {
        return object['home']['players'][name].shoe;
    } else {
        return object['away']['players'][name].shoe;
    }
}

function teamColors(teamName){
    let filterd = object['home']['teamName']

    if(filterd === teamName) {
        return object['home']['colors']
    } else {
        return object['away']['colors']
    }

  }

console.log(teamColors('Charlotte Hornets'));
