export const projects = [
  {
    title: "Speech Enhancement using Deep Neural Nets",
    description:
      "Removing the noise present in a real time noisy signal is a challenging problem even today. With the advancements in Deep Learning, this project aims to enchane the quality of noisy signals using Deep Neural Networks. Using the log power spectrum of the nosiy and the clean sigals, the network learns the differences between them and removes the noise if a new signal is given",
    image: "/images/speech_denoising_1.jpg",
    tags: ["Python", "tensorflow", "keras"],
    code: "https://github.com/achaitu/SpeechDenoisingDNN",
    link: "",
    id: 0,
  },
  {
    title: "Red Blood Cell Counting and White Blood Cell Classification",
    description:
      "Using Image processing and Machine learning techniques for Red blood cells count and disease diagnosis to improve the quality and reduce the time required for reports. Counting the number of red blood cells present in a blood smear image is done using Image processing techiques like circular hough transform and Watershed algorithms. Classify the White blood cells into its major catagories which would be useful to identify any diseases present in the blood using Convolutional Neural Networks.",
    image: "/images/blood_cells_1.jpg",
    tags: ["Python", "Tensorflow", "Keras", "Matlab"],
    code: "https://github.com/ahaitu/blood_cell_classification",
    link: "",
    id: 1,
  },
  {
    title: "React Clones",
    description:
      "Clones of popular social media websites using React.js i) LinkedIn, ii) Instagram, iii) Netflix",
    image: "/images/linkedin.png",
    tags: ["React", "Firebase", "Tailwind CSS"],
    code: "",
    link: "https://linkedin-clone-chaitu.web.app/",
    id: 4,
  },
  {
    title: "Covid-19-Tracker",
    description:
      "Number of new cases, recovered cases, and deaths of covid-19 for each country. Includes daily cases and total number of cases till date. Interactive maps to zoom into a particular country. ",
    image: "/images/covid-19-tracker.png",
    tags: ["React", "Firebase"],
    code: "https://github.com/achaitu/Covid-tracker",
    link: "https://covid-19-tracker-59bb7.web.app/",
    id: 5,
  },
  {
    title: "Coexistence of LTE-Unlicensed and Wi-Fi",
    description:
      "With the increase in the number of mobile devices and hence increase in the traffic loads, LTE service providers are allowed to use the unlicensed spectrum for transmission, resulting in LTE unlicensed. But there has to be a coexistence method when LTE is using the unlicensed spectrum such that it does not tamper the newtorks already deployed in the unlicensed band i.e mainly Wi-Fi. So, we proposed a system model and solved the optimization problem. We also gave a gametheoretic framework to the problem and solved for the Nash equilibrium. Also introduced a q-learning technique to dynamically determine the individual airtimes for LTE and Wi-Fi",
    image: "/images/coexistence.jpg",
    tags: ["Matlab", "CVXPY"],
    code: "",
    link: "",
    id: 2,
  },
  {
    title: "Smart Hand Stick",
    description:
      "This project aims using of singal processing techiques to impove the quality of visully impaired people by providing themm a smart hand stick which alerts the user about any obstacle present infont of them by sounding an alarm. Also a DC motor is connected which provides a vibration to the stick to prvent the user hitting any obstacle in a noisy environment",
    image: "/images/smart_handstick_1.jpg",
    tags: ["Matlab", "Arduino"],
    code: "",
    link: "",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2015, text: "Started my undergrad" },
  {
    year: 2018,
    text: "Worked as a research intern in Lekha Wireless Solutions Private Limited",
  },
  {
    year: 2019,
    text: "Joined TCS Research as a full time researcher",
  },
  // { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Planning to pursue masters" },
];
