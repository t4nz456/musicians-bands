const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const testBand = await Band.create({ name: 'Yes', genre: 'Rap' });
        expect(testBand.name).toBe('Yes')
        expect(testBand.genre).toBe('Rap');
    });

    test('can create a Musician', async () => {
        const testMusician = await Musician.create({ name: 'George', instrument: 'Guitar' });
        expect(testMusician.name).toBe('George')
        expect(testMusician.instrument).toBe('Guitar');
    });

    test('can create a Song', async () => {
        const testSong = await Song.create({ title: 'Cold Water', year: 2016, length: 3 });
        expect(testSong.title).toBe("Cold Water")
        expect(testSong.year).toBe(2016)
        expect(testSong.length).toBe(3);
    });

    test('can update a Band', async () => {
        const testBand = await Band.create({ name: 'Test Band', genre: 'Pop' });
        const testBand2 = await testBand.update({ name: "Harry" });
        expect(testBand2.name).toBe('Harry');
    });

    test('can update a Musician', async () => {
        const testMusician = await Musician.create({ name: 'Test Musician', instrument: 'Piano' });
        const testMusician2 = await testMusician.update({ instrument: 'Drums' });
        expect(testMusician2.instrument).toBe('Drums');
    });

    test('can update a Song', async () => {
        const testSong = await Song.create({ title: 'Test Song', year: 2015, length: 4 });
        const testSong2 = await testSong.update({ year: 2017 });
        expect(testSong2.year).toBe(2017);
    });

    test('can delete a Band', async () => {
        const testBand = await Band.create({ name: 'Test Band', genre: 'Pop' });
        const testBand3 = await testBand.destroy();
        expect(testBand3).toBe(null);
    });

    test('can delete a Musician', async () => {
        const testMusician = await Musician.create({ name: 'Test Musician', instrument: 'Piano' });
        const testMusician3 = await testMusician.destroy();
        expect(testMusician3).toBe(null);
    });

    test('can delete a Song', async () => {
        const testSong = await Song.create({ title: 'Test Song', year: 2015, length: 4 });
        const testSong3 = await testSong.destroy();
        expect(testSong3).toBe(null);
    });

    expect(musiciansInBand).toContainEqual(musician1);
    expect(musiciansInBand).toContainEqual(musician2);

})


