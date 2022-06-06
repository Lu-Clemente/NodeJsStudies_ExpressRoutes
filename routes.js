const express = require('express');
const routes = express.Router();

const coursesInfo = [
    {
        "course": "node",
        "info": "Node lessons"
    },
    {
        "course": "react",
        "info": "React lessons"
    },
    {
        "course": "java",
        "info": "Java lessons"
    },
    {
        "course": "python",
        "info": "Python lessons"
    },
    {
        "course": "php",
        "info": "PHP lessons"
    },
];

const queryLevel = [
    {
        "id": 0,
        "level": "Junior"
    },
    {
        "id": 1,
        "level": "Pleno"
    },
    {
        "id": 2,
        "level": "Senior"
    }
];

routes.get('/', (req, res) => {
    res.json({
        greetings: "You're welcome!"
    })
});

routes.get('/:courseId', (req, res) => {
    const course = req.params.courseId;
    const courseI = coursesInfo.find(i => i.course === course);

    const query = req.query["level"];
    const queryL = queryLevel.find(i => (i.level).toLowerCase() === query);

    if (!courseI) {
        res.status(404).json({
            error: 'Nothing here',
            searched: course
        });
    } else {
        if (queryL) {
            res.send("Learning level: " + queryL.level);
        } else {
            res.status(200).json(courseI);
        }
    }
});

const myName = "Lu Clemente"

module.exports = { routes, myName };