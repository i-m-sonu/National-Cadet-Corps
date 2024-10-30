import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AbcIcon from "@mui/icons-material/Abc";
import A from "../images/a1.jpg";
import IDSSC from "../images/idssc.jpg";
import C from "../images/cws.jpg";
import D from "../images/rdc24.jpeg";
import ALC from "../images/alc.jpeg";
import PDLS from "../images/pdls.jpeg";
import TSC23 from "../images/tsc23.jpeg";
import ENV from "../images/env.jpeg";
import BLC from "../images/blc.jpeg";
import RDC23 from "../images/rdc23.jpeg";
import IMA from "../images/ima.jpeg";
import YEP22 from "../images/yep22.jpeg";
import OTA from "../images/ota.jpeg";
import ATT from "../images/att.jpeg";
import TSC22 from "../images/tsc22.jpeg";
import ALC22 from "../images/alc22.jpeg";
import BLC22 from "../images/blc22.jpeg";
import ATC22 from "../images/atc22.jpeg";
import EBSB from "../images/ebsb.jpeg";
import RDC21 from "../images/rdc21.jpeg";
import RDC20 from "../images/rdc20.jpeg";
import YEP19 from "../images/yep19.jpeg";
import CGC from "../images/cgc.jpeg";
import RDC19 from "../images/rdc19.jpeg";

import "../css/timeline.css";
const MyTimeline = () => {
  return (
    <div className="all">
      <h1 className="head"> TIMELINE</h1>

      <VerticalTimeline>
        {/* First Timeline Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
          date="2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">Sonu Kumar</h3>
          <h4 className="vertical-timeline-element-subtitle">
            All India Thal Sainik Camp 2024
          </h4>
          <div className="flex">
            <img src={A} className="img" alt="Sonu Kumar at Thal Sainik Camp" />
            {/* <img src={B} className='img' alt="Sonu Kumar at Thal Sainik Camp" />
        <img src={C} className='img' alt="Sonu Kumar at Thal Sainik Camp" />
        <img src={D} className='img' alt="Sonu Kumar at Thal Sainik Camp" /> */}
          </div>
          <p>
            I am Sonu Kumar, and I recently attended the All India Thal Sainik
            Camp 2024 at Delhi Cantt, where I competed in the Health and Hygiene
            category and earned a Bronze medal. My journey began in July,
            leading to selection among six cadets from a larger group. I
            represented my group, Patiala, at the Inter Group Competition,
            winning a Gold medal. At the national camp, I had the honor of
            serving as the Master of Ceremony, introducing distinguished leaders
            like Major General Chawla and Lieutenant General Singh. This
            challenging experience greatly enhanced my personal growth and
            leadership skills.
          </p>
        </VerticalTimelineElement>

        {/* Second Timeline Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">IGSSC Camp 2024</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
          <img src={IDSSC} className="img" alt="Camp" />

          <p>
            Inter Group Sports Shooting Competition 2024 was held at Doaba Group
            of Colleges Kharar from 1st May to 10th May, 2024. Cdt. Chetan, Cdt.
            Saloni Nayak and Cdt. Vidushi Chauhan attended this Camp.
          </p>
        </VerticalTimelineElement>

        {/* Third Timeline Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023-2024"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CWS Award for Best Cadet
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Academic Year 2023-2024
          </h4>
          <img src={C} className="img" alt="Camp" />

          <p>
            SUO Mahima received the CWS Award for the Best Cadet in the year
            2023-2024 and felicitated by Group Commander, Brig. Rahul Gupta at
            NCC Group HQ Patiala on 29thApril,2024.
          </p>
        </VerticalTimelineElement>

        {/* Fourth Timeline Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2024"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">RDC</h3>
          <h4 className="vertical-timeline-element-subtitle">2024</h4>
          <img src={D} className="img" alt="Camp" />

          <p>
            Republic Day Camp was held at NCC New Delhi from 29th Dec 2023 –
            29th Jan 2024. Cdt. Aryan Rathee and Cdt. Ved Vyas Sharma has
            attended this Camp.
          </p>
        </VerticalTimelineElement>

        {/* Ending Element */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">ALC</h3>
          <h4 className="vertical-timeline-element-subtitle">2023</h4>
          <img src={ALC} className="img" alt="Camp" />

          <p>
            ALC Camp was held at Dehradun from 07-09-2023 to 18-09-2023. Cdt.
            Bhagat and Cdt. Ansh has attended this Camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Personality Development and Life Skill (PDLS) Camp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2023</h4>
          <img src={PDLS} className="img" alt="Camp" />

          <p>
            Personality Development and Life Skill Camp 2023 was held at Lovely
            Professional University, Phagwara, (Punjab) from 15th July to 24th
            July, 2023. Cdt. Abhishek Chaudhary attended this Camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Pre-TSC-II, III, IV
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2023</h4>
          <img src={TSC23} className="img" alt="Camp" />

          <p>
            Pre-TSC I-IV was held at NCC Academy Ropar from 17-08-2023,
            18-09-2023. 01 cadet (SUO Mahima) of CGC Landran has attended this
            camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            MISSION LIFE : WORLD ENVIRONMENT DAY
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2023</h4>
          <img src={ENV} className="img" alt="Camp" />

          <p>
            World Environment Day held at CGC Landran on 27-05-2023. 32 cadets
            of CGC has taken part in different activities (Essay Competition,
            Poster making Competition, Environmental Awareness Rally + Oath,
            debate competition).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">BLC</h3>
          <h4 className="vertical-timeline-element-subtitle">2023</h4>
          <img src={BLC} className="img" alt="Camp" />

          <p>
            Basic Leadership Camp was held at NCC Academy Malout from 24th April
            2023- 3rd May 2023. 04 cadets (Cdt. Ansh Sharma, Cdt. Hardik, Cdt.
            Bhagat Singh and Cdt. Sonu Kumar) of CGC attended this camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">Republic Day Camp</h3>
          <h4 className="vertical-timeline-element-subtitle">2023</h4>
          <img src={RDC23} className="img" alt="Camp" />

          <p>
            Republic Day Camp was held at NCC New Delhi from 29th Dec 2022 –
            29th Jan 2023. SUO Karan Singh attended this Camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IMA Attachment Camp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <img src={IMA} className="img" alt="Camp" />

          <p>
            IMA Attachment Camp was held at IMA, Dehradun from 17th Dec to 27th
            Dec, 2022. UO Harsh Deshwal attended this camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">YEP</h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <img src={YEP22} className="img" alt="Camp" />

          <p>
            Youth Exchange Programme (YEP) was held at Bangladesh from 12th Dec
            to 23rd Dec, 2022. SUO Khushdeep Dhiman attended this Camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            OTA Attachment Camp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <img src={OTA} className="img" alt="Camp" />

          <p>
            OTA Attachment Camp was held at OTA,chennai from 03rd Nov to 12th
            Nov,2022. SUO Khushdeep Dhiman attended this Camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Army Attachment Camp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <img src={ATT} className="img" alt="Camp" />

          <p>
            Army Attachment camp was held at Patiala from 1st oct to 15th oct,
            2022. Our 05 Cadets attended this camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">TSC</h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <img src={TSC22} className="img" alt="Camp" />

          <p>
            Thal Sena Camp was held at New Delhi from 17th Sept- 27th Sept ,
            2022. SUO Karan Singh participated in this camp
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">ALC</h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <img src={ALC22} className="img" alt="Camp" />

          <p>
            Advance Leadership Camp was held at NCC Academy Malout from 07th
            Sept 2022- 17th Sept 2022. 02 cadets of CGC attended this camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">BLC</h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <img src={BLC22} className="img" alt="Camp" />

          <p>
            Basic Leadership Camp was held at NCC Academy Malout from 19th Aug
            2022- 27th Aug 2022. 04 cadets of CGC attended this camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">ATC-118</h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <img src={ATC22} className="img" alt="Camp" />

          <p>
            Annual Training Camp held at NCC Academy Ropar from 01st Aug 2022 to
            8th Aug 2022. 25 cadets from CGC attended this camp. This camp was
            compulsory for cadets to be eligible for B and C certificate exam
            2023.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">EBSB-1</h3>
          <h4 className="vertical-timeline-element-subtitle">2022</h4>
          <img src={EBSB} className="img" alt="Camp" />

          <p>
            Ek Bharat Shrestha Bharat camp held at Malout from 04th June-15th
            June 2022. 04 Cadet of CGC participated in this Camp.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Republic Day Camp (RDC 2021)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2021</h4>
          <img src={RDC21} className="img" alt="Camp" />

          <p>
            Republic Day Camp held at NCC New Delhi from 20th Dec 2020 – 31st
            Jan 2021 which two cadets of CEC participated S.U.O. Prateek Saini
            U.O. Kamya Saini
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            REPUBLIC DAY CELEBRATION
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2021</h4>
          <img src={RDC20} className="img" alt="Camp" />

          <p>
            Republic day celebrated at CGC Landran in which 30 cadets of CEC
            participated After the flag hosting ceremony , cadets performed the
            march past in front of the chief guest.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Youth Exchange Programme
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2019</h4>
          <img src={YEP19} className="img" alt="Camp" />

          <p>
            SUO Kunal Sagar of CEC selected for prestigious Youth Exchange
            Programme at Srilanka . He represent as Youth Ambassador of India at
            Bangladesh from 31st Oct-08th Nov 2019.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CGC Annual Sport Meet
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2019</h4>
          <img src={CGC} className="img" alt="Camp" />

          <p>
            35 Cadets of CEC participated in the March past on 12th Feb
            2019.They lead the March past . NCC Cadets also taught march to
            students.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<AbcIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Republic Day Camp(RDC-2019)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">2019</h4>
          <img src={RDC19} className="img" alt="Camp" />

          <p>
            Republic Day camp held at NCC New Delhi from 31st Dec 2018-31st Jan
            2019 which one cadets of CEC participated . S.U.O Kunal Sagar
          </p>

          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default MyTimeline;
