const agenda = require('./agenda');

const agendaService = () => {
  const init = async () => agenda.init();

  const addJob = async (data) => {
    agenda.getAgenda().now('poc', data);
  };

  return {
    init, addJob
  };
};

module.exports = agendaService;
