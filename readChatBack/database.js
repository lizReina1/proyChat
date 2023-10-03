const fs = require('fs');

class JsonDatabase {
  constructor(filePath) {
    if (!JsonDatabase.instance) {
      this.filePath = filePath;
      this.data = [];
      this.loadData();
      JsonDatabase.instance = this;
    }

    return JsonDatabase.instance;
  }

  loadData() {
    try {
      const fileData = fs.readFileSync(this.filePath);
      this.data = JSON.parse(fileData);
    } catch (error) {
      console.error('Error loading data:', error);
      this.data = [];
    }
  }

  saveData() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }

  getAllData() {
    return this.data;
  }

  getDataById(id) {
    return this.data.find(item => item.id === id);
  }

  createData(newItem) {
    newItem.id = this.data.length + 1;
    this.data.push(newItem);
    this.saveData();
    return newItem;
  }
}

// Usage
const instance = new JsonDatabase('db/db.json');
Object.freeze(instance);

module.exports = instance;
