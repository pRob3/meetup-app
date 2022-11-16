import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
  {
    id: '1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/7/74/Lilla_Bommen_in_Gothenburg.jpg',
    address: 'Slafstreet 69, 12345 Gothenburg',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: '2',
    title: 'This is a second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Boras.jpg',
    address: 'Slafstreet 187, 12345 Boras',
    description:
      'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
