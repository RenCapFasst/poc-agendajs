const Agenda = require('agenda');
const { pathOr, path } = require('ramda');

const agenda = (() => {
    let address = pathOr('mongodb://localhost:27017/poc-agenda', ['env', 'MONGO_DB_URL'], process);

    // Create the agenda
    const agenda = new Agenda({ db: { address } });

    // Define the poc job
    agenda.define('poc', async (job, done) => {
      const data = path(['attrs', 'data'], job);
      console.log(`poc job with data ${JSON.stringify(data)}`);

      // Throw an error 50% of the time
      if (Math.random() < 0.5) {
        console.log('Random is too low');
        throw 'Random is too low';
      }
      console.log('Random is ok');

      // Terminate the job
      done();
    });

    const init = async () => {
      await agenda.start();
      console.log('Agenda initialized');
    };

    const getAgenda = () => agenda;

    return {
      init,
      getAgenda
    };
  }
)();

module.exports = agenda;
