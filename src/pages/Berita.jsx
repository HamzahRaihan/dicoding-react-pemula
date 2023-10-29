import Card from '../components/CardBerita/Card';
import Header from '../components/Header';

function Berita() {
  const newsData = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#',
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#',
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#',
    },
  ];

  return (
    <div style={{ color: 'white' }}>
      <Header title={'latest news'} subtitle={'covering march and april 2022'} />
      {newsData.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </div>
  );
}

export default Berita;
