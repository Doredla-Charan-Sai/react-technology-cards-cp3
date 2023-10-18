import './App.css'
import CardItem from './components/CardItem'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="bg-cont">
    <div className="upper-cont">
      <h1 className="main-head">Learn 4.0 Technologies</h1>
      <p className="main-para" type="text">
        Get trained by alumni of IITs and top companies The word lorem, for
        example, a real Latin word, s a shortened version of the word do lorem,
        meaning pain. This makes the current dummy text impossible to translate
        into English.
      </p>
    </div>
    <div className="lower-cont">
      <ul>
        {cardsList.map(item => (
          <CardItem cardDetails={item} key={item.id} />
        ))}
      </ul>
    </div>
  </div>
)

export default App
