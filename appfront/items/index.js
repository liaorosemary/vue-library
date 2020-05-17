const casual = require('casual').en_CA

module.exports = () => {
  casual.define("items", function() {
    return {
      title: casual.state,
      firstname: casual.first_name,
      surname: casual.last_name,
      address: casual.street,
      id: casual.uuid,
	  type: casual.random_element(['eBook', 'Book', 'DVD'])
    };
  });
  const data = {
    items: []
  };
  for (let i = 0; i < 240; i++) {
    data.items.push(casual.items);
  }
  return data;
};
