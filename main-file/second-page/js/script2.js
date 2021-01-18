const { v4: uuidv4 } = require('uuid');

async function testUUID() {
    const uuid = uuidv4();
    document.getElementById("uuidField").innerHTML = uuid;
};

