// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "",
    levels: {

        start: {
            message: "Your going to the mall",
            choices: [
                {
                    text: "buy clothes",
                    nextLevel:"store"
                },

                {
                    text: "buy food",
                    nextLevel: "fast_food",
                },
            ]
        },

        store: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "buy lots of clothes",
            choices: [
                {
                    text: "don't spend all your money",
                    nextLevel: "notbroke",
                },
                 {
                    text: "spend your money on clothes, you deserve it",
                    nextLevel: "broke",
                },
                {
                text: "start over",
                    nextLevel: "fast_food",
                },
            ]
        },

        fast_food: {
            message: "you have two fast food choices",
            choices: [
                {
                    text: "wendys",
                    nextLevel: "start",
                }, 
                {
                    text: "mcdonalds",
                    nextLevel: "start",
                },
                {
                    text: "start over",
                    nextLevel: "start",
                },
                
            ]
        },     
         broke: {
            message: "  Now since you spent all your money you have two choices",
            choices: [
                {
                    text: "ask your mom for money ",
                    nextLevel: "start",
                }, 
                {
                    text:  "get a job",
                    nextLevel: "start",
                },
                {
                    text: "start over",
                    nextLevel: "start",
                },
            ]
              },
                notbroke: {
            message: "Since you have money left",
            choices: [
                {
                    text: "go eat",
                    nextLevel: "fast_food",
                }, 
                
                {
                    text:  "go home",
                    nextLevel: "start over",
                },
                
                {
                    text: "start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
