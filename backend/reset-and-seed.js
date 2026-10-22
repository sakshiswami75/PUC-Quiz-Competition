const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Attempt = require('./models/Attempt');
const Team = require('./models/Team');
const TeamCounter = require('./models/TeamCounter');
const { seedInitialData } = require('./seed');

const CONFIRMATION_FLAG = '--confirm-reset';

async function resetCompetitionData() {
  console.warn('WARNING: This permanently deletes all competition teams and attempts.');
  console.warn('It resets team numbering and cannot be undone.');
  console.warn(`Re-run this command with the explicit ${CONFIRMATION_FLAG} flag to continue.`);

  if (!process.argv.slice(2).includes(CONFIRMATION_FLAG)) {
    throw new Error(`Reset cancelled. Missing required ${CONFIRMATION_FLAG} confirmation.`);
  }

  await connectDB(process.env.MONGO_URI);

  await Attempt.deleteMany({});
  await Team.deleteMany({});
  await TeamCounter.deleteMany({});

  console.log('Reset complete: attempts, teams, and team counters were deleted.');
  await seedInitialData();
}

(async () => {
  try {
    await resetCompetitionData();
    console.log('Reset and seed completed successfully.');
  } catch (err) {
    console.error('Reset and seed failed:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
})();
