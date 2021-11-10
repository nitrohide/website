import "./portfolio.scss"
import SkillBar from 'react-skillbars';


export default function Portfolio() {
  const LANGUAGES = [
    {type: "Java", level: 70},
    {type: "SQL", level: 60},
    {type: "C#", level: 55},
    {type: "HTML/CSS", level: 50},
    {type: "Javascript", level: 45},
    {type: "Python", level: 40},
    {type: "R", level: 35},
    {type: "C", level: 30},
    {type: "React", level: 25},
  ]
  const TOOLS = [
    {type: "Git", level: 60},
    {type: "MySQL", level: 50},
    {type: "JavaFX", level: 35},
    {type: "Android Studio", level: 30},
    {type: "Microsoft SQL", level: 20},
    {type: "AWS", level: 20},
  ]
  // const SKILLS = [
  //   {type: "Teamwork", level: 90},
  //   {type: "Communication", level: 80},
  //   {type: "Leadership", level: 75},
  // ]

  const LANGUAGESCOLORS = {
    "bar": {
      "hue": 240,
      "saturation": 90,
      "level": {
        "minimum": 40,
        "maximum": 100
      }
    },
    "title": {
      "text": {
        "hue": 0,
        "saturation": {
          "minimum": 70,
          "maximum": 30
        },
        "level": 100
      },
      "background": {
        "hue": 240,
        "saturation": {
          "minimum": 70,
          "maximum": 30
        },
        "level": {
          "minimum": 50,
          "maximum": 90
        }
      }
    }
  }
  const TOOLSCOLORS = {
    "bar": {
      "hue": 140,
      "saturation": 90,
      "level": {
        "minimum": 40,
        "maximum": 100
      }
    },
    "title": {
      "text": {
        "hue": 0,
        "saturation": {
          "minimum": 70,
          "maximum": 30
        },
        "level": 100
      },
      "background": {
        "hue": 140,
        "saturation": {
          "minimum": 70,
          "maximum": 30
        },
        "level": {
          "minimum": 50,
          "maximum": 90
        }
      }
    }
  }
  // const SKILLSCOLORS = {
  //   "bar": {
  //     "hue": 40,
  //     "saturation": 90,
  //     "level": {
  //       "minimum": 40,
  //       "maximum": 100
  //     }
  //   },
  //   "title": {
  //     "text": {
  //       "hue": 0,
  //       "saturation": {
  //         "minimum": 70,
  //         "maximum": 30
  //       },
  //       "level": 100
  //     },
  //     "background": {
  //       "hue": 40,
  //       "saturation": {
  //         "minimum": 70,
  //         "maximum": 30
  //       },
  //       "level": {
  //         "minimum": 50,
  //         "maximum": 90
  //       }
  //     }
  //   }
  // }
    return (
        <div className = "portfolio" id = "portfolio">
            <div className="left">
                    Skills
            </div>

            <div className="right">
              <div className="languagesbars">
                <h1>Languages</h1>
                <SkillBar skills={LANGUAGES} animationDelay={500} animationDuration={2500} colors={LANGUAGESCOLORS}/>
              </div>
              <div className="toolsbars">
                <h1>Tools & Frameworks</h1>
                <SkillBar skills={TOOLS} animationDelay={500} animationDuration={2500} colors={TOOLSCOLORS}/>
              </div>
              {/* <div className="personalbars">
                <h1>Soft Skills</h1>
                <SkillBar skills={SKILLS} animationDelay={500} animationDuration={2500} colors={SKILLSCOLORS}/>
              </div> */}
            </div>
        </div>
    )
}
