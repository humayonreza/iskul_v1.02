// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContentService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
export interface web_content {
  ser: number;
  page_id: string;
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {}

  web_content: web_content[] = [
    {
      ser: 1,
      page_id: 'navbar',
      data: [
        {
          id: 1,
          user_type: 'visitor',
          is_signed: 0,
          links: [
            {
              ser: 1,
              routeName: 'Home',
              route: '',
              icon: 'home',
              isActive: 1,
            },
            {
              ser: 2,
              routeName: 'About',
              route: '/about',
              icon: 'developer_board',
              isActive: 0,
            },
            {
              ser: 3,
              routeName: 'Contact',
              route: '/contact',
              icon: 'perm_phone_msg',
              isActive: 0,
            },
            {
              ser: 4,
              routeName: 'Courses',
              route: '/courses',
              icon: 'local_library',
              isActive: 0,
            },
            {
              ser: 5,
              routeName: 'Student Account',
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
      data: [
        {
          ser: 1,
          component: 'slider',
          contents: [
            {
              sliderId: 1,
              imgId: '1.png',
              title: 'Responsible Services of Alcohol',
              price: '20',
              features: [
                {
                  icon: 'touch_app',
                  txt: 'Easy and affordable',
                },
                {
                  icon: 'gavel',
                  txt: 'Nationally accredited',
                },
                {
                  icon: 'school',
                  txt: 'Certificate on completion',
                },
                {
                  icon: 'compare_arrows',
                  txt: 'Complete at your pace',
                },
              ],
            },
            {
              sliderId: 2,
              imgId: '2.png',
              title: 'Security Operation II',
              price: '25',
              features: [
                {
                  icon: 'touch_app',
                  txt: 'Easy and affordable',
                },
                {
                  icon: 'gavel',
                  txt: 'Nationally accredited',
                },
                {
                  icon: 'school',
                  txt: 'Certificate on completion',
                },
                {
                  icon: 'compare_arrows',
                  txt: 'Complete at your pace',
                },
              ],
            },
            {
              sliderId: 3,
              imgId: '3.png',
              title: 'First Aid',
              price: '30',
              features: [
                {
                  icon: 'touch_app',
                  txt: 'Easy and affordable',
                },
                {
                  icon: 'gavel',
                  txt: 'Nationally accredited',
                },
                {
                  icon: 'school',
                  txt: 'Certificate on completion',
                },
                {
                  icon: 'compare_arrows',
                  txt: 'Complete at your pace',
                },
              ],
            },
          ],
        },
        {
          ser: 2,
          component: 'portfolio',
          title: 'Who we are',
          txt: 'Welcome to Trained up, your gateway to acquiring knowledge and empowering your personal and professional growth. We are dedicated to offering high-quality online courses designed to enhance your skills, broaden your horizons, and unlock your true potential. In today`s fast-paced and ever-evolving world, continuous learning is essential. That`s why we have curated a diverse selection of courses that cater to a wide range of interests and industries. Whether you`re looking to enhance your career prospects, explore a new passion, or simply expand your knowledge, our courses are tailored to meet your needs. Flexibility is key to our approach. We understand that everyone has unique schedules and learning preferences. That`s why our online courses offer the freedom to learn at your own pace, from anywhere in the world. Whether you prefer to study during the day or after work, our courses are available 24/7, allowing you to tailor your learning experience to fit your busy lifestyle.',
          contents: [
            {
              title: 'Comprehensive Curriculum',
              txt: 'Our courses feature well-structured, in-depth content that covers every aspect of the subject matter. Developed by industry experts, they provide a solid foundation and equip you with practical knowledge that you can apply immediately. Forget about rigid schedules and commuting to physical locations. With our online courses, you have the freedom to learn at your own pace, on your own schedule. Access the course materials from any device and anywhere in the world. Learn whenever and wherever it suits you best. ',
              imgId: '1.png',
            },
            {
              title: 'Completely Online',
              txt: 'Our online courses allow you to study whenever and wherever it suits you best. Whether you`re a busy professional, a student, or a parent, you can fit your learning journey into your busy life. Take control of your education and achieve a healthy work-life balance. Engage with interactive videos, quizzes, and hands-on exercises that make learning dynamic and enjoyable. Our user-friendly platform provides an immersive learning experience that keeps you motivated and focused throughout the course. ',
              imgId: '2.png',
            },
            {
              title: 'Learner Friendly',
              txt: 'Our platform features a user-friendly interface that is easy to navigate, ensuring a seamless learning experience. Access your courses, track your progress, and find resources with just a few clicks. We prioritize simplicity and clarity, so you can focus on what matters most—learning. We understand that each learner is unique, with different strengths, weaknesses, and learning preferences. Our online system adapts to your needs, providing personalized learning paths tailored to your individual progress and goals. ',
              imgId: '3.png',
            },
            {
              title: '24/7 Operation & Support',
              txt: 'Our 24/7 support is designed to ensure that you receive assistance whenever you need it. Have questions about course content, assignments, or assessments? Our support team is knowledgeable about the courses we offer and can provide clarifications and guidance to help you succeed in your learning journey every step of the way. If you have questions or concerns regarding your account, billing, or payment options, our support team can provide the necessary information and address any issues promptly.',
              imgId: '4.png',
            },
          ],
        },
        {
          ser: 3,
          component: 'what-seperates-us',
          title: 'What seperates us',
          txt: 'At Trained up, your success is our primary focus. We are dedicated to providing ongoing support and guidance throughout your learning journey, yet keeping the price affordable to you. Our dedicated customer support team is always ready to assist you, ensuring that your experience with us is smooth and enjoyable. So take the first step towards achieving your goals, expanding your knowledge, and embracing lifelong learning. Browse our course catalog, select the courses that resonate with you, and join our vibrant community of learners today. The power to learn and grow is at your fingertips.',

          contents: [
            {
              serviceId: 1,
              imgId: '1.png',
              title: 'Easy and Affordable',
              txt: 'At Trained up we believe that learning should be accessible to everyone. That`s why we are committed to offering courses that are both easy to follow and affordable, ensuring that you can pursue your educational goals without breaking the bank. Our courses are designed with simplicity and clarity in mind. We understand that complex jargon and convoluted explanations can hinder the learning process. Therefore, our instructors strive to present the course material in a concise and understandable manner, breaking down complex concepts into easily digestible modules.',
            },
            {
              serviceId: 2,
              imgId: '2.png',
              title: 'Nationally Accredited',
              txt: 'At Trained up we take immense pride in our nationally accredited courses. Our commitment to maintaining high standards of quality and meeting rigorous accreditation criteria sets us apart as a trusted and reputable educational institution. National accreditation serves as a mark of excellence and signifies that our courses meet or exceed the established standards set by respected accrediting bodies. This recognition is a testament to our dedication to delivering educational programs that adhere to the highest levels of academic rigor, instructional effectiveness, and ethical practices.',
            },
            {
              serviceId: 3,
              imgId: '3.png',
              title: 'Certificate on Completion',
              txt: 'Certification on completion of an online course is a valuable achievement that signifies your dedication to learning and mastery of specific skills or knowledge. Obtaining a certification demonstrates that you have successfully completed the requirements of the course and have gained a certain level of proficiency in the subject matter. It provides validation for the time and effort you have invested in acquiring new skills or knowledge. Provided our student completed the final assessment and paid the course fees, Trained up will remain obligated to generate a valid certificate as soon as possible.',
            },
            {
              serviceId: 4,
              imgId: '4.png',
              title: 'Complete at Your Pace',
              txt: 'At Trained up we understand that everyone has unique schedules and learning preferences. That`s why we offer the flexibility for you to complete our online courses at your own pace and in the comfort of your preferred learning environment. We believe that learning should be a personalized experience that fits seamlessly into your lifestyle. Once enrolled, you gain the freedom to set your own study schedule and progress through the course material at a pace that suits you best. Whether you prefer to dedicate focused blocks of time or prefer to spread your learning over a more extended period, the choice is entirely up to you.',
            },
            // {
            //   serviceId: 5,
            //   imgId: '5.png',
            //   title: 'Family Dispute Resolution Services',
            //   txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            // },
            // {
            //   serviceId: 6,
            //   imgId: '6.png',
            //   title: 'One Stop Legal Service',
            //   txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
            // },
          ],
        },
        {
          ser: 4,
          component: 'review',
          title: 'Client`s Review',
          txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
          contents: [
            {
              reviewId: 1,
              reviewerName: 'Shot Wingly',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 2,
              reviewerName: 'Bill Gilmore',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 3,
              reviewerName: 'Tore Moree',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 1,
              reviewerName: 'Ana Smith',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 1,
              reviewerName: 'Mont Gomery',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
            {
              reviewId: 1,
              reviewerName: 'Peter Holtik',
              review:
                'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
              reviewDate: '2023-04-12',
            },
          ],
        },
        {
          ser: 5,
          component: 'legislation',
          title: 'State/Territory wise legislations',
          txt: 'Legislation regarding services can vary from state to state within a country. State legislation for services can cover a wide range of areas, such as professional licensing, consumer protection, health and safety regulations, labor laws, and more. It`s important to note that the specifics of state legislation can vary significantly, so it`s essential to consult the relevant laws and regulations in the specific state and country pertaining to the services you are interested in.',
          contents: [
            {
              stateId: 1,
              state: 'QLD',
              stateName: 'QUEENSLAND',
              imgId: '1.png',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
              legislations: [
                {
                  courseId: 'RSA',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'First Aid',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'Security Op II',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
              ],
            },
            {
              stateId: 2,
              state: 'NSW',
              stateName: 'NEW SOUTH WALSE',
              imgId: '1.png',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
              legislations: [
                {
                  courseId: 'RSA',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'First Aid',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'Security Op II',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
              ],
            },
            {
              stateId: 3,
              state: 'ACT',
              stateName: 'AUSTRALIAN CAPITAL TERRITORY',
              imgId: '1.png',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
              legislations: [
                {
                  courseId: 'RSA',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'First Aid',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'Security Op II',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
              ],
            },
            {
              stateId: 4,
              state: 'VIC',
              stateName: 'VICTORIA',
              imgId: '1.png',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
              legislations: [
                {
                  courseId: 'RSA',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'First Aid',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'Security Op II',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
              ],
            },
            {
              stateId: 5,
              state: 'TAS',
              stateName: 'TASMANIA',
              imgId: '1.png',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
              legislations: [
                {
                  courseId: 'RSA',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'First Aid',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'Security Op II',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
              ],
            },
            {
              stateId: 6,
              state: 'SA',
              stateName: 'SOUTH AUSTRALIA',
              imgId: '1.png',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
              legislations: [
                {
                  courseId: 'RSA',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'First Aid',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'Security Op II',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
              ],
            },
            {
              stateId: 7,
              state: 'WA',
              stateName: 'WESTERN AUSTRALIA',
              imgId: '1.png',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
              legislations: [
                {
                  courseId: 'RSA',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'First Aid',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'Security Op II',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
              ],
            },
            {
              stateId: 8,
              state: 'NT',
              stateName: 'NORTHERN TERRITORY',
              imgId: '1.png',
              txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys, we are committed to fighting for your rights',
              legislations: [
                {
                  courseId: 'RSA',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'First Aid',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
                {
                  courseId: 'Security Op II',
                  sop: [
                    { title: 'Title 1', txt: 'Some text contents' },
                    { title: 'Title 2', txt: 'Some text contents' },
                    { title: 'Title 3', txt: 'Some text contents' },
                    { title: 'Title 4', txt: 'Some text contents' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ser: 3,
      page_id: 'about',
      data: [
        {
          ser: 1,
          title: 'Who we are',
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
          title: 'Our mission',
          description:
            'Our mission is to provide accessible and high-quality online courses that empower learners to acquire new knowledge, develop valuable skills, and achieve personal and professional growth. We strive to create a dynamic and engaging learning environment that fosters curiosity, collaboration, and continuous improvement. Through our innovative and learner-centric approach, we aim to inspire and equip individuals from diverse backgrounds to unlock their full potential and pursue lifelong learning opportunities. We are committed to delivering exceptional educational experiences that promote self-paced learning, flexibility, and convenience, enabling our learners to thrive in an ever-evolving digital world.',
          txt: [
            {
              text: 'We are dedicated to revolutionizing education through our comprehensive range of online courses. With a passion for learning and a commitment to excellence, we strive to empower individuals around the globe to enhance their knowledge, skills, and career prospects.',
            },
            {
              text: 'We prioritize learner success and satisfaction, providing flexible learning options that fit seamlessly into busy lifestyles. Our intuitive platform offers 24/7 access to course materials, allowing learners to study at their own pace and convenience. Additionally, our responsive support team is readily available to assist learners throughout their educational journey.',
            },
          ],
        },
      ],
    },

    {
      ser: 4,
      page_id: 'contact',

      data: [
        {
          ser: 1,
          title: 'You are important',
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
      page_id: 'courses',
      data: [
        {
          ser: 1,
          component: 'courses',
          contents: [
            {
              courseId: 'RSA',
              imgId: '1.png',
              title: 'Responsible Services of Alcohol',
              price: '20',
              desc: [
                {
                  ser: 1,
                  title:
                    'The responsible service of alcohol (RSA) is of significant importance in Australia for several reasons. Australia has a well-established drinking culture, and alcohol-related issues such as excessive consumption, public intoxication, drunk driving, and alcohol-related violence have been persistent concerns. The RSA framework aims to address these issues and promote a safer and healthier drinking environment. Here are some key reasons why responsible service of alcohol is important in Australia:',
                  body: [
                    {
                      txt: 'Health and Safety: Excessive alcohol consumption can have serious health implications, including liver damage, increased risk of cancer, mental health problems, and other physical ailments. By promoting responsible service, the RSA framework helps reduce the harmful effects of alcohol and protects individuals from the potential risks associated with excessive drinking.',
                    },
                    {
                      txt: 'Harm Reduction: Irresponsible alcohol service can lead to various harms, including alcohol-related accidents, injuries, and violence. The RSA guidelines help mitigate these risks by training and educating alcohol service providers to recognize signs of intoxication, refuse service to intoxicated individuals, and manage potentially volatile situations effectively. This helps in preventing harm to both the individuals consuming alcohol and the broader community.',
                    },
                    {
                      txt: 'Drunk Driving Prevention: Alcohol-impaired driving is a major concern for road safety. RSA training emphasizes the importance of not serving alcohol to individuals who are already intoxicated and discourages the overconsumption of alcohol. By reducing excessive drinking and promoting responsible behavior, RSA helps in curbing drunk driving incidents and improving overall road safety.',
                    },
                    {
                      txt: 'Social and Community Well-being: Alcohol-related violence and anti-social behavior can have a detrimental impact on communities. RSA practices encourage responsible behavior and provide tools to manage situations where patrons become intoxicated or display aggressive behavior. By promoting responsible alcohol service, RSA contributes to creating safer and more enjoyable social environments for everyone.',
                    },
                    {
                      txt: 'Legal Compliance: In Australia, there are specific laws and regulations governing the service and consumption of alcohol. Adhering to RSA guidelines ensures that businesses and individuals comply with these legal requirements. Failure to comply with RSA regulations can result in penalties, fines, and potential loss of liquor licenses.',
                    },
                  ],
                },
              ],
              isSelected: 0,
            },
            {
              courseId: 'SY',
              imgId: '2.png',
              title: 'Security Operation II',
              price: '25',
              desc: [],
              isSelected: 0,
            },
            {
              courseId: 'FA',
              imgId: '3.png',
              title: 'First Aid',
              price: '30',
              desc: [],
              isSelected: 0,
            },
          ],
        },
      ],
    },
    {
      ser: 6,
      page_id: 'blog',
      data: [{}],
    },

    {
      ser: 7,
      page_id: 'footer',
      data: [
        {
          copyright: 'All right reserved by some org name',
          contents: [
            {
              id: 1,
              section: [
                {
                  id: 1,
                  txt: 'Our Goal',
                },
                {
                  id: 2,
                  txt: 'Welcome to JUST Law Firm, where justice meets excellence. Our firm is dedicated to providing exceptional legal representation and personalized solutions for our clients. With a team of highly skilled attorneys',
                },
                {
                  id: 3,
                  txt: '23 435 525 825',
                },
              ],
            },
            {
              id: 2,
              section: [
                {
                  id: 1,
                  txt: 'Important Links',
                },
                {
                  id: 2,
                  txt: 'Link 1',
                },
                {
                  id: 3,
                  txt: 'link 3',
                },
                {
                  id: 4,
                  txt: 'link 4',
                },
              ],
            },
            {
              id: 3,
              section: [
                {
                  id: 1,
                  txt: 'Keep in touch',
                },
                {
                  id: 2,
                  txt: '22 KiriBiri House,North Town, London',
                },
                {
                  id: 3,
                  txt: 'E: info@something.com',
                },
                {
                  id: 4,
                  txt: 'P: +43 45 456 443',
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
