import "./App.css";
import Avatar from "./components/Avatar.js";
import BackToTop from "./components/BackToTop";
import Badge from "./components/Badge.js";
import Button from "./components/Button.js";
import Checkbox from "./components/Checkbox.js";
import DatePicker from "./components/DatePicker";
import DropDown from "./components/DropDown";
import Input from "./components/Input.js";
import Notification from "./components/Notification";
import Pagination from "./components/Pagination";
import Progress from "./components/Progress";
import Radio from "./components/Radio.js";
import Rating from "./components/Rating";
import Select from "./components/Select.js";
import Slider from "./components/Slider";
import Steps from "./components/Steps";
import Switch from "./components/Switch.js";
import Tabs from "./components/Tabs";
import Tag from "./components/Tag.js";
import TimePicker from "./components/TimePicker";
import Tooltip from "./components/Tooltip";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="app">
      <Avatar />
      <Badge />
      <Button>Home</Button>
      <Checkbox />
      <Input />
      <Radio />
      <Select />
      <Switch />
      <Tag />
      <Pagination />
      <Tabs />
      <DropDown />
      <Steps />
      <BackToTop />
      <DatePicker />
      <TimePicker />
      <Slider />
      <Upload />
      <Rating />
      <Tooltip />
      <Notification />
      <Progress />
    </div>
  );
}

export default App;
