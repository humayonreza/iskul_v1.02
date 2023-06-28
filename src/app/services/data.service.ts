import { Injectable } from '@angular/core';

export interface web_content {
  ser: number;
  page_id: string;
  landing_contents: any;
  contents: any;
}

export interface width_options {
  id: number;
  title: string;
  bs_def: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  web_content: web_content[] = [
    {
      ser: 1,
      page_id: 'navbar',
      landing_contents: [],
      contents: [
        {
          id: 1,
          user_type: 'visitor',
          is_signed: 0,
          links: [
            {
              ser: 1,
              link_name: 'Home',
              route: '',
              icon: 'home',
              isActive: 1,
            },
            {
              ser: 2,
              link_name: 'About',
              route: '/about',
              icon: 'developer_board',
              isActive: 0,
            },
            {
              ser: 3,
              link_name: 'Contact',
              route: '/contact',
              icon: 'perm_phone_msg',
              isActive: 0,
            },
            {
              ser: 4,
              link_name: 'Courses',
              route: '/courses',
              icon: 'local_library',
              isActive: 0,
            },
            {
              ser: 5,
              link_name: 'Student Account',
              route: '/account',
              icon: 'how_to_reg',
              isActive: 0,
            },
          ],
        },
      ],
    },
    {
      ser: 2,
      page_id: 'home',
      landing_contents: [
        {
          slag: 'RTO SLAG',
          abn: '1234573',
          rto_reg_no: '25428323',
          address: '23 Gilford St, Downhill Madiosary, 2456, Canberra',
          contact: '+61 48634363',
          banner: 'banner.png',
          sliders: [
            {
              title: 'Some title for slider 1',
              txt: 'Some Text for slider 1',
              img: 'slider1.png',
            },
            {
              title: 'Some title for slider 2',
              txt: 'Some Text for slider 2',
              img: 'slider2.png',
            },
            {
              title: 'Some title for slider 3',
              txt: 'Some Text for slider 3',
              img: 'slider3.png',
            },
            {
              title: 'Some title for slider 4',
              txt: 'Some Text for slider 4',
              img: 'slider4.png',
            },
          ],
        },
      ],
      contents: [
        {
          content_id: 1,
          offers: [
            {
              offer_id: 1,
              offer_title: 'RSA',
              offer_price: '$20 AUD',
              features: [
                {
                  txt: 'Comprehensive Curriculum',
                },
                {
                  txt: 'Flexibility and Convenience',
                },
                {
                  txt: 'Lifetime Access and Updates',
                },
                {
                  txt: 'Certificates of Completion',
                },
              ],
              img: 'slider1.png',
              description:
                ' In Australia, it is a legal requirement for individuals involved in the sale, supply, or service of alcohol to hold a valid RSA certificate. This includes bartenders, waitstaff, managers, and any other personnel directly involved in the alcohol service industry. Failure to hold a valid RSA certificate can result in legal consequences and penalties.',
            },
            {
              offer_id: 2,
              offer_title: 'First Aid',
              offer_price: '$25 AUD',
              features: [
                {
                  txt: 'Comprehensive Curriculum',
                },
                {
                  txt: 'Flexibility and Convenience',
                },
                {
                  txt: 'Lifetime Access and Updates',
                },
                {
                  txt: 'Certificates of Completion',
                },
              ],
              img: 'slider2.png',
              description:
                'First Aid courses empower individuals to take immediate action in critical situations. Prompt and appropriate First Aid can significantly increase the chances of survival and reduce the severity of injuries. Being equipped with life-saving skills can make a vital difference in emergencies until professional medical help arrives.',
            },
            {
              offer_id: 3,
              offer_title: 'Security Op II',
              offer_price: '$30 AUD',
              features: [
                {
                  txt: 'Comprehensive Curriculum',
                },
                {
                  txt: 'Flexibility and Convenience',
                },
                {
                  txt: 'Lifetime Access and Updates',
                },
                {
                  txt: 'Certificates of Completion',
                },
              ],
              img: 'slider3.png',
              description:
                'Security courses provide individuals with the necessary skills and knowledge to contribute to public safety. Trained security professionals play a crucial role in preventing and mitigating risks, ensuring the well-being of individuals, properties, and public spaces. By undergoing security training, individuals can help maintain a safe environment for communities.',
            },
            // {
            //   offer_id: 4,
            //   offer_title: 'Construction Security',
            //   offer_price: 'Upcoming',
            //   is_accredited: 1,
            //   valid_in: 'ACT, NT, SA',
            //   img: 'slider4.png',
            //   features: [
            //     {
            //       txt: 'Comprehensive Curriculum',
            //     },
            //     {
            //       txt: 'Flexibility and Convenience',
            //     },
            //     {
            //       txt: 'Lifetime Access and Updates',
            //     },
            //     {
            //       txt: 'Certificates of Completion',
            //     },
            //   ],
            //   description:
            //     'A Construction Security course provides individuals with the knowledge and skills to implement effective security measures to prevent these incidents. By understanding site vulnerabilities, access control, and surveillance techniques, individuals can protect valuable equipment, materials, and infrastructure.',
            // },
          ],
        },
        {
          content_id: 2,
          portfolio: [
            {
              title: 'Learn and Succeed from the comfort of your own home',
              titleTxt:
                'Unlock your true potential and acquire valuable skills with our carefully crafted online courses designed to empower you in today`s dynamic world. Whether you`re a professional looking to advance your career or someone eager to explore new horizons, we have the perfect courses to fulfill your aspirations. Say goodbye to boring lectures! Our courses are enriched with interactive videos, captivating presentations, real-life examples, and engaging exercises to keep you motivated throughout your learning journey. Say hello to an immersive and enjoyable learning experience',
              features: [
                {
                  txt: 'Dive into real-world projects and assignments that simulate the challenges you`ll face in your professional journey. Develop the skills and confidence you need to succeed.',
                },
                {
                  txt: 'Stay on top of your progress with our comprehensive tracking and analytics tools. Monitor your achievements, assess your strengths, and identify areas for improvement. Receive valuable insights and recommendations to optimize your learning outcomes.',
                },
                {
                  txt: 'Once you enroll in our courses, you gain lifetime access to the course materials, including any future updates. Stay up-to-date with the latest industry trends and techniques. Revisit the content whenever you need a refresher or want to deepen your knowledge.',
                },
              ],
              img: 'portfolio.png',
            },
          ],
        },
        {
          content_id: 3,
          benifits: [
            {
              header: 'Comprehensive Curriculum',
              txt: 'Our courses feature well-structured, in-depth content that covers every aspect of the subject matter. Developed by industry experts, they provide a solid foundation and equip you with practical knowledge that you can apply immediately. Forget about rigid schedules and commuting to physical locations. With our online courses, you have the freedom to learn at your own pace, on your own schedule. Access the course materials from any device and anywhere in the world. Learn whenever and wherever it suits you best. Join a vibrant community of like-minded learners from around the globe. Connect with fellow students, exchange ideas, and collaborate on projects. Expand your network, get inspired, and forge valuable relationships that can last a lifetime.',
              img: 'benifit1.png',
            },
            {
              header: 'Completely Online',
              txt: 'Our online courses allow you to study whenever and wherever it suits you best. Whether you`re a busy professional, a student, or a parent, you can fit your learning journey into your busy life. Take control of your education and achieve a healthy work-life balance. Engage with interactive videos, quizzes, and hands-on exercises that make learning dynamic and enjoyable. Our user-friendly platform provides an immersive learning experience that keeps you motivated and focused. Interact with fellow learners through discussion forums, fostering a collaborative learning environment. The interface is build with latest software platform which will take away your worries on speed and glitches',
              img: 'benifit2.png',
            },
            {
              header: 'Learner Friendly',
              txt: ' Our platform features a user-friendly interface that is easy to navigate, ensuring a seamless learning experience. Access your courses, track your progress, and find resources with just a few clicks. We prioritize simplicity and clarity, so you can focus on what matters most—learning. We understand that each learner is unique, with different strengths, weaknesses, and learning preferences. Our system adapts to your needs, providing personalized learning paths tailored to your individual progress and goals. Maximize your potential with a customized educational journey',
              img: 'benifit3.png',
            },
            {
              header: '24/7 Operation & Support',
              txt: 'Our 24/7 support is designed to ensure that you receive assistance whenever you need it. Have questions about course content, assignments, or assessments? Our support team is knowledgeable about the courses we offer and can provide clarifications and guidance to help you succeed. We`re here to support your learning journey every step of the way.  If you have questions or concerns regarding your account, billing, or payment options, our support team can provide the necessary information and address any issues promptly. We strive to ensure a smooth and hassle-free experience for our learners.',
              img: 'benifit4.png',
            },
          ],
        },
        {
          content_id: 4,
          title: 'TESTIMONIALS',
          txt: 'At Trained up, students are our top priority. We understand the importance of providing exceptional service and meeting the needs of each individual. We strive to create a positive and personalized experience for every customer, ensuring their satisfaction and success. Your feedback and satisfaction are invaluable to us, and we are committed to continuously improving and exceeding your expectations',
          reviews: [
            {
              reviewer_id: 1,
              reviewer_name: 'Some Name',
              grade_achieved: '10',
              suggestion:
                'Xtreme Training Australia is the leading RTO in RSA Online and RSG Online courses, renowned for its distinguished offering. ',
              created_on: '2023-03-12',
            },
            {
              reviewer_id: 2,
              reviewer_name: 'Some Name',
              grade_achieved: '8',
              suggestion:
                'Xtreme Training Australia is the leading RTO in RSA Online and RSG Online courses, renowned for its distinguished offering. ',
              created_on: '2023-03-12',
            },
            {
              reviewer_id: 3,
              reviewer_name: 'Some Name',
              grade_achieved: '10',
              suggestion:
                'Xtreme Training Australia is the leading RTO in RSA Online and RSG Online courses, renowned for its distinguished offering. ',
              created_on: '2023-03-12',
            },
            {
              reviewer_id: 4,
              reviewer_name: 'Some Name',
              grade_achieved: '10',
              suggestion:
                'Xtreme Training Australia is the leading RTO in RSA Online and RSG Online courses, renowned for its distinguished offering. ',
              created_on: '2023-03-12',
            },
            {
              reviewer_id: 5,
              reviewer_name: 'Some Name',
              grade_achieved: '9',
              suggestion:
                'Xtreme Training Australia is the leading RTO in RSA Online and RSG Online courses, renowned for its distinguished offering. ',
              created_on: '2023-03-12',
            },
            {
              reviewer_id: 6,
              reviewer_name: 'Some Name',
              grade_achieved: '10',
              suggestion:
                'Xtreme Training Australia is the leading RTO in RSA Online and RSG Online courses, renowned for its distinguished offering. ',
              created_on: '2023-03-12',
            },
          ],
        },
      ],
    },

    {
      ser: 3,
      page_id: 'about',
      landing_contents: [
        {
          img: 'about.png',
          background: 'Some Background Text',
          about_us: 'Some content',
          mission: 'Some content on mission',
          vision: 'Some content on vision',
        },
      ],
      contents: [
        {
          ser: 1,
          title: 'Who we are:',
          description:
            'Our team of experienced educators and industry experts curate and deliver courses that are relevant, practical, and engaging. We leverage cutting-edge technology and instructional design principles to create immersive and interactive learning experiences. Whether you are a student seeking to expand your academic horizons, a professional aiming to upskill or reskill, or an enthusiast pursuing personal interests, we have a course for you.',
          txt: [
            {
              text: 'We are dedicated to revolutionizing education through our comprehensive range of online courses. With a passion for learning and a commitment to excellence, we strive to empower individuals around the globe to enhance their knowledge, skills, and career prospects.',
            },
            {
              text: 'We prioritize learner success and satisfaction, providing flexible learning options that fit seamlessly into busy lifestyles. Our intuitive platform offers 24/7 access to course materials, allowing learners to study at their own pace and convenience. Additionally, our responsive support team is readily available to assist learners throughout their educational journey.',
            },
            {
              text: 'Join us on a transformative learning journey, unlock your potential, and shape your future with the power of knowledge. Discover endless possibilities and embark on a path of personal and professional growth with Trained up',
            },
          ],
        },
        {
          ser: 2,
          title: 'Our mission:',
          description:
            'Our mission is to provide accessible and high-quality online courses that empower learners to acquire new knowledge, develop valuable skills, and achieve personal and professional growth. We strive to create a dynamic and engaging learning environment that fosters curiosity, collaboration, and continuous improvement. Through our innovative and learner-centric approach, we aim to inspire and equip individuals from diverse backgrounds to unlock their full potential and pursue lifelong learning opportunities. We are committed to delivering exceptional educational experiences that promote self-paced learning, flexibility, and convenience, enabling our learners to thrive in an ever-evolving digital world.',
          txt: [
            {
              text: 'We are dedicated to revolutionizing education through our comprehensive range of online courses. With a passion for learning and a commitment to excellence, we strive to empower individuals around the globe to enhance their knowledge, skills, and career prospects.',
            },
            {
              text: 'We prioritize learner success and satisfaction, providing flexible learning options that fit seamlessly into busy lifestyles. Our intuitive platform offers 24/7 access to course materials, allowing learners to study at their own pace and convenience. Additionally, our responsive support team is readily available to assist learners throughout their educational journey.',
            },
            {
              text: 'Join us on a transformative learning journey, unlock your potential, and shape your future with the power of knowledge. Discover endless possibilities and embark on a path of personal and professional growth with Trained up',
            },
          ],
        },
      ],
    },

    {
      ser: 4,
      page_id: 'contact',
      landing_contents: [
        {
          img: 'contact.png',
          background: 'Some Background Text',
          about_us: 'Some content',
          mission: 'Some content on mission',
          vision: 'Some content on vision',
        },
      ],
      contents: [
        {
          ser: 1,
          title: 'You are important:',
          description:
            'We encourage you to connect with us on social media to stay updated on our latest courses, promotions, and educational content. Follow us on [Social Media Platform] for engaging discussions and to be a part of our vibrant learning community.',
          txt: [
            {
              text: 'If you have any questions about our courses, enrollment process, or any other aspect of our online learning platform, our dedicated support team is ready to help. You can also explore our Frequently Asked Questions (FAQs) section, which may already provide answers to commonly asked questions.',
            },
            {
              text: 'We understand the importance of timely responses, and we strive to provide efficient customer support. Our team will make every effort to respond to your inquiries promptly within our stated response time.',
            },
            {
              text: 'We are excited to assist you on your learning journey and help you achieve your educational goals. Your success is our priority, and we look forward to supporting you every step of the way.',
            },
          ],
        },
      ],
    },

    {
      ser: 5,
      page_id: 'register',
      landing_contents: [],
      contents: [
        {
          courses: [],
        },
      ],
    },

    // =======================  Account ===============================
    {
      ser: 6,
      page_id: 'account',
      landing_contents: [],
      contents: [
        {
          courses: [],
        },
      ],
    },
    // ===================  Access Course =============================
    {
      ser: 7,
      page_id: 'access-course',
      landing_contents: [],
      contents: [
        {
          courses: [],
        },
      ],
    },

    {
      ser: 8,
      page_id: 'courses',
      landing_contents: [],
      contents: [
        {
          courses: [
            {
              ser: 1,
              course_id: 'RSA',
              title: 'RSA',
              price_amount: 20,
              img: 'rsa.png',
              thumbnail: 'thumbnail_rsa.png',
              btn_title: 'Choose',
              price_id: 'price_1MzcGEAZxxGe6ponl9PfGiaw',
              isSelected: 0,
              description: [
                {
                  ser: 1,
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                },
              ],
              features: [
                {
                  id: 1,
                  txt: 'completely online',
                },
                { id: 2, txt: 'Go at your pace' },
                {
                  id: 3,
                  txt: 'Start with trial and pay only when you are ready',
                },
                {
                  id: 4,
                  txt: 'Instant certificate',
                },
              ],

              guidelines: [
                {
                  ser: 1,
                  state: 'ACT',
                  txt: 'The Australian Capital Territory (ACT) has specific regulations and guidelines in place for the responsible service of alcohol. Here are some key rules to follow when serving alcohol in the ACT:',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'All staff involved in the sale, supply, or service of alcohol must complete an approved Responsible Service of Alcohol (RSA) training course.',
                    },
                    {
                      rule: 2,
                      txt: 'Always ask for proof of age if the patron appears to be under 25 years old. Acceptable forms of identification include a driver`s license, passport, or proof of age card.',
                    },
                    {
                      rule: 3,
                      txt: 'It is illegal to serve alcohol to someone who is already intoxicated. Look for signs of intoxication such as slurred speech, stumbling, aggressive behavior, or impaired coordination.',
                    },
                    {
                      rule: 4,
                      txt: 'Do not serve more than the maximum allowable number of drinks to a patron at one time.',
                    },
                    {
                      rule: 5,
                      txt: 'It is illegal to serve alcohol to anyone under the age of 18. Staff should be empowered to refuse service to any person who appears intoxicated or underage, or if they believe continued service would be irresponsible.',
                    },
                    {
                      rule: 6,
                      txt: 'Avoid promotions that encourage excessive consumption or rapid drinking, such as all-you-can-drink offers or unlimited free refills.',
                    },
                  ],
                },
                {
                  ser: 2,
                  state: 'NSW',
                  txt: 'In New South Wales (NSW), the responsible service of alcohol is regulated by the Liquor Act 2007 and the Liquor Regulation 2018. Here are some key rules to follow when serving alcohol in NSW:',
                  lagislations: [
                    {
                      rule: 1,
                      txt: ' All staff involved in the sale, supply, or service of alcohol must complete an approved Responsible Service of Alcohol (RSA) training course.',
                    },
                    {
                      rule: 2,
                      txt: 'Always ask for proof of age if the patron appears to be under 25 years old. Acceptable forms of identification include a driver`s license, passport, or proof of age card.',
                    },
                    {
                      rule: 3,
                      txt: 'It is illegal to serve alcohol to someone who is already intoxicated. Look for signs of intoxication such as slurred speech, stumbling, aggressive behavior, or impaired coordination.',
                    },
                    {
                      rule: 4,
                      txt: 'Ensure that you and your staff understand what constitutes a standard drink and how to measure and serve appropriate quantities.',
                    },
                    {
                      rule: 5,
                      txt: 'Avoid promotions that encourage excessive consumption or rapid drinking, such as all-you-can-drink offers or unlimited free refills.',
                    },
                    {
                      rule: 6,
                      txt: 'It is illegal to serve alcohol to anyone under the age of 18. Take extra care to ensure that minors are not consuming alcohol on the premises.  Staff should be empowered to refuse service to any person who appears intoxicated or underage, or if they believe continued service would be irresponsible.',
                    },
                  ],
                },
                {
                  ser: 3,
                  state: 'VIC',
                  txt: 'In Victoria, the responsible service of alcohol is regulated by the Liquor Control Reform Act 1998 and the Liquor Control Reform Regulations 2009. Here are some key rules to follow when serving alcohol in Victoria:',
                  lagislations: [
                    {
                      rule: 1,
                      txt: ' All staff involved in the sale, supply, or service of alcohol must complete an approved Responsible Service of Alcohol (RSA) training course.',
                    },
                    {
                      rule: 2,
                      txt: 'Always ask for proof of age if the patron appears to be under 25 years old. Acceptable forms of identification include a driver`s license, passport, or proof of age card.',
                    },
                    {
                      rule: 3,
                      txt: 'It is illegal to serve alcohol to someone who is already intoxicated. Look for signs of intoxication such as slurred speech, stumbling, aggressive behavior, or impaired coordination.',
                    },
                    {
                      rule: 4,
                      txt: 'Ensure that you and your staff understand what constitutes a standard drink and how to measure and serve appropriate quantities.',
                    },
                    {
                      rule: 5,
                      txt: 'Avoid promotions that encourage excessive consumption or rapid drinking, such as all-you-can-drink offers or unlimited free refills.',
                    },
                    {
                      rule: 6,
                      txt: 'It is illegal to serve alcohol to anyone under the age of 18. Take extra care to ensure that minors are not consuming alcohol on the premises.  Staff should be empowered to refuse service to any person who appears intoxicated or underage, or if they believe continued service would be irresponsible.',
                    },
                  ],
                },
                {
                  ser: 4,
                  state: 'SA',
                  txt: 'In South Australia, the responsible service of alcohol is governed by the Liquor Licensing Act 1997 and the Liquor Licensing Regulations 2018. Here are some key rules to follow when serving alcohol in South Australia:',
                  lagislations: [
                    {
                      rule: 1,
                      txt: ' All staff involved in the sale, supply, or service of alcohol must complete an approved Responsible Service of Alcohol (RSA) training course.',
                    },
                    {
                      rule: 2,
                      txt: 'Always ask for proof of age if the patron appears to be under 25 years old. Acceptable forms of identification include a driver`s license, passport, or proof of age card.',
                    },
                    {
                      rule: 3,
                      txt: 'It is illegal to serve alcohol to someone who is already intoxicated. Look for signs of intoxication such as slurred speech, stumbling, aggressive behavior, or impaired coordination.',
                    },
                    {
                      rule: 4,
                      txt: 'Ensure that you and your staff understand what constitutes a standard drink and how to measure and serve appropriate quantities.',
                    },
                    {
                      rule: 5,
                      txt: 'Avoid promotions that encourage excessive consumption or rapid drinking, such as all-you-can-drink offers or unlimited free refills.',
                    },
                    {
                      rule: 6,
                      txt: 'It is illegal to serve alcohol to anyone under the age of 18. Take extra care to ensure that minors are not consuming alcohol on the premises.  Staff should be empowered to refuse service to any person who appears intoxicated or underage, or if they believe continued service would be irresponsible.',
                    },
                  ],
                },
                {
                  ser: 5,
                  state: 'WA',
                  txt: 'In Western Australia, the responsible service of alcohol is governed by the Liquor Control Act 1988 and the Liquor Control Regulations 1989. Here are some key rules to follow when serving alcohol in Western Australia',
                  lagislations: [
                    {
                      rule: 1,
                      txt: ' All staff involved in the sale, supply, or service of alcohol must complete an approved Responsible Service of Alcohol (RSA) training course.',
                    },
                    {
                      rule: 2,
                      txt: 'Always ask for proof of age if the patron appears to be under 25 years old. Acceptable forms of identification include a driver`s license, passport, or proof of age card.',
                    },
                    {
                      rule: 3,
                      txt: 'It is illegal to serve alcohol to someone who is already intoxicated. Look for signs of intoxication such as slurred speech, stumbling, aggressive behavior, or impaired coordination.',
                    },
                    {
                      rule: 4,
                      txt: 'Ensure that you and your staff understand what constitutes a standard drink and how to measure and serve appropriate quantities.',
                    },
                    {
                      rule: 5,
                      txt: 'Avoid promotions that encourage excessive consumption or rapid drinking, such as all-you-can-drink offers or unlimited free refills.',
                    },
                    {
                      rule: 6,
                      txt: 'It is illegal to serve alcohol to anyone under the age of 18. Take extra care to ensure that minors are not consuming alcohol on the premises.  Staff should be empowered to refuse service to any person who appears intoxicated or underage, or if they believe continued service would be irresponsible.',
                    },
                  ],
                },
                {
                  ser: 6,
                  state: 'NT',
                  txt: 'In the Northern Territory (NT) of Australia, the responsible service of alcohol is regulated by the Liquor Act and Liquor Regulations. Here are some key rules to follow when serving alcohol in the NT',
                  lagislations: [
                    {
                      rule: 1,
                      txt: ' All staff involved in the sale, supply, or service of alcohol must complete an approved Responsible Service of Alcohol (RSA) training course.',
                    },
                    {
                      rule: 2,
                      txt: 'Always ask for proof of age if the patron appears to be under 25 years old. Acceptable forms of identification include a driver`s license, passport, or proof of age card.',
                    },
                    {
                      rule: 3,
                      txt: 'It is illegal to serve alcohol to someone who is already intoxicated. Look for signs of intoxication such as slurred speech, stumbling, aggressive behavior, or impaired coordination.',
                    },
                    {
                      rule: 4,
                      txt: 'Ensure that you and your staff understand what constitutes a standard drink and how to measure and serve appropriate quantities.',
                    },
                    {
                      rule: 5,
                      txt: 'Avoid promotions that encourage excessive consumption or rapid drinking, such as all-you-can-drink offers or unlimited free refills.',
                    },
                    {
                      rule: 6,
                      txt: 'It is illegal to serve alcohol to anyone under the age of 18. Take extra care to ensure that minors are not consuming alcohol on the premises.  Staff should be empowered to refuse service to any person who appears intoxicated or underage, or if they believe continued service would be irresponsible.',
                    },
                  ],
                },
                {
                  ser: 7,
                  state: 'QLD',
                  txt: 'In Queensland, the responsible service of alcohol is regulated by the Liquor Act 1992 and the Liquor Regulation 2018. Here are some key rules to follow when serving alcohol in Queensland:',
                  lagislations: [
                    {
                      rule: 1,
                      txt: ' All staff involved in the sale, supply, or service of alcohol must complete an approved Responsible Service of Alcohol (RSA) training course.',
                    },
                    {
                      rule: 2,
                      txt: 'Always ask for proof of age if the patron appears to be under 25 years old. Acceptable forms of identification include a driver`s license, passport, or proof of age card.',
                    },
                    {
                      rule: 3,
                      txt: 'It is illegal to serve alcohol to someone who is already intoxicated. Look for signs of intoxication such as slurred speech, stumbling, aggressive behavior, or impaired coordination.',
                    },
                    {
                      rule: 4,
                      txt: 'Ensure that you and your staff understand what constitutes a standard drink and how to measure and serve appropriate quantities.',
                    },
                    {
                      rule: 5,
                      txt: 'Avoid promotions that encourage excessive consumption or rapid drinking, such as all-you-can-drink offers or unlimited free refills.',
                    },
                    {
                      rule: 6,
                      txt: 'It is illegal to serve alcohol to anyone under the age of 18. Take extra care to ensure that minors are not consuming alcohol on the premises.  Staff should be empowered to refuse service to any person who appears intoxicated or underage, or if they believe continued service would be irresponsible.',
                    },
                  ],
                },
                {
                  ser: 8,
                  state: 'TAS',
                  txt: 'In Tasmania, the responsible service of alcohol is regulated by the Liquor Licensing Act 1990 and the Liquor Licensing Regulations 2016. Here are some key rules to follow when serving alcohol in Tasmania:',
                  lagislations: [
                    {
                      rule: 1,
                      txt: ' All staff involved in the sale, supply, or service of alcohol must complete an approved Responsible Service of Alcohol (RSA) training course.',
                    },
                    {
                      rule: 2,
                      txt: 'Always ask for proof of age if the patron appears to be under 25 years old. Acceptable forms of identification include a driver`s license, passport, or proof of age card.',
                    },
                    {
                      rule: 3,
                      txt: 'It is illegal to serve alcohol to someone who is already intoxicated. Look for signs of intoxication such as slurred speech, stumbling, aggressive behavior, or impaired coordination.',
                    },
                    {
                      rule: 4,
                      txt: 'Ensure that you and your staff understand what constitutes a standard drink and how to measure and serve appropriate quantities.',
                    },
                    {
                      rule: 5,
                      txt: 'Avoid promotions that encourage excessive consumption or rapid drinking, such as all-you-can-drink offers or unlimited free refills.',
                    },
                    {
                      rule: 6,
                      txt: 'It is illegal to serve alcohol to anyone under the age of 18. Take extra care to ensure that minors are not consuming alcohol on the premises.  Staff should be empowered to refuse service to any person who appears intoxicated or underage, or if they believe continued service would be irresponsible.',
                    },
                  ],
                },
              ],
            },
            {
              ser: 2,
              course_id: 'FA',
              title: 'First Aid',
              price_amount: 25,
              img: 'fa.png',
              thumbnail: 'thumbnail_fa.png',
              btn_title: 'Choose',
              price_id: '',
              isSelected: 0,
              description: [
                {
                  ser: 1,
                  txt: 'First Aid Course is required to in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
                },
              ],
              features: [
                {
                  id: 1,
                  txt: 'completely online',
                },
                { id: 2, txt: 'Go at your pace' },
                {
                  id: 3,
                  txt: 'Start with trial and pay only when you are ready',
                },
                {
                  id: 4,
                  txt: 'Instant certificate',
                },
              ],
              guidelines: [
                {
                  ser: 1,
                  state: 'ACT',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on ACT FA guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on ACT FA guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on ACT FA guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on ACT FA guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on ACT FA guidelines',
                    },
                  ],
                },
                {
                  ser: 2,
                  state: 'NSW',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on NSW FA guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on NSW FA guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on NSW FA guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on NSW FA guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on NSW FA guidelines',
                    },
                  ],
                },
                {
                  ser: 3,
                  state: 'VIC',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on VIC FA guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on VIC FA guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on VIC FA guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on VIC FA guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on VIC FA guidelines',
                    },
                  ],
                },
                {
                  ser: 4,
                  state: 'SA',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on SA FA guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on SA FA guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on SA FA guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on SA FA guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on SA FA guidelines',
                    },
                  ],
                },
                {
                  ser: 5,
                  state: 'WA',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on WA FA guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on WA FA guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on WA FA guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on WA FA guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on WA FA guidelines',
                    },
                  ],
                },
                {
                  ser: 6,
                  state: 'NT',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on NT FA guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on NT FA guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on NT FA guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on NT FA guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on NT FA guidelines',
                    },
                  ],
                },
                {
                  ser: 7,
                  state: 'QLD',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on QLD FA guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on QLD FA guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on QLD FA guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on QLD FA guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on QLD FA guidelines',
                    },
                  ],
                },
                {
                  ser: 8,
                  state: 'TAS',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on TAS FA guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on TAS FA guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on TAS FA guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on TAS FA guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on TAS FA guidelines',
                    },
                  ],
                },
              ],
            },
            {
              ser: 3,
              course_id: 'Security',
              title: 'Security',
              price_amount: 35,
              img: 'sy.png',
              thumbnail: 'thumbnail_sy.png',
              btn_title: 'Choose',
              price_id: '',
              isSelected: 0,
              description: [
                {
                  ser: 1,
                  txt: 'Security Course is required to in publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
                },
              ],

              features: [
                {
                  id: 1,
                  txt: 'completely online',
                },
                { id: 2, txt: 'Go at your pace' },
                {
                  id: 3,
                  txt: 'Start with trial and pay only when you are ready',
                },
                {
                  id: 4,
                  txt: 'Instant certificate',
                },
              ],
              guidelines: [
                {
                  ser: 1,
                  state: 'ACT',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on ACT SECURITY OP-II guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on ACT SECURITY OP-II guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on ACT SECURITY OP-II guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on ACT SECURITY OP-II guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on ACT SECURITY OP-II guidelines',
                    },
                  ],
                },
                {
                  ser: 2,
                  state: 'NSW',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on NSW SECURITY OP-II guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on NSW SECURITY OP-II guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on NSW SECURITY OP-II guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on NSW SECURITY OP-II guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on NSW SECURITY OP-II guidelines',
                    },
                  ],
                },
                {
                  ser: 3,
                  state: 'VIC',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on VIC SECURITY OP-II guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on VIC SECURITY OP-II guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on VIC SECURITY OP-II guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on VIC SECURITY OP-II guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on VIC SECURITY OP-II guidelines',
                    },
                  ],
                },
                {
                  ser: 4,
                  state: 'SA',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on SA SECURITY OP-II guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on SA SECURITY OP-II guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on SA SECURITY OP-II guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on SA SECURITY OP-II guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on SA SECURITY OP-II guidelines',
                    },
                  ],
                },
                {
                  ser: 5,
                  state: 'WA',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on WA SECURITY OP-II guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on WA SECURITY OP-II guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on WA SECURITY OP-II guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on WA SECURITY OP-II guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on WA SECURITY OP-II guidelines',
                    },
                  ],
                },
                {
                  ser: 6,
                  state: 'NT',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on NT SECURITY OP-II guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on NT SECURITY OP-II guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on NT SECURITY OP-II guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on NT SECURITY OP-II guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on NT SECURITY OP-II guidelines',
                    },
                  ],
                },
                {
                  ser: 7,
                  state: 'QLD',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on QLD SECURITY OP-II guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on QLD SECURITY OP-II guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on QLD SECURITY OP-II guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on QLD SECURITY OP-II guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on QLD SECURITY OP-II guidelines',
                    },
                  ],
                },
                {
                  ser: 8,
                  state: 'TAS',
                  txt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. ',
                  lagislations: [
                    {
                      rule: 1,
                      txt: 'Some rule 1 on TAS SECURITY OP-II guidelines',
                    },
                    {
                      rule: 2,
                      txt: 'Some rule 2 on TAS SECURITY OP-II guidelines',
                    },
                    {
                      rule: 3,
                      txt: 'Some rule 3 on TAS SECURITY OP-II guidelines',
                    },
                    {
                      rule: 4,
                      txt: 'Some rule 4 on TAS SECURITY OP-II guidelines',
                    },
                    {
                      rule: 5,
                      txt: 'Some rule 5 on TAS SECURITY OP-II guidelines',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  width_options: width_options[] = [
    {
      id: 0,
      title: '--- Set width ---',
      bs_def: '0',
    },
    {
      id: 1,
      title: '20%',
      bs_def: '2 | col-sm-2',
    },
    {
      id: 2,
      title: '25% | col-sm-3',
      bs_def: '3',
    },
    {
      id: 3,
      title: '33% | col-sm-4',
      bs_def: '4',
    },
    {
      id: 4,
      title: '50% | col-sm-6',
      bs_def: '6',
    },
    {
      id: 5,
      title: '70% | col-sm-8',
      bs_def: '8',
    },
    {
      id: 6,
      title: '100% | col-sm-12',
      bs_def: '12',
    },
  ];
}
