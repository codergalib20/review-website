import React from 'react';
import Header from '../hooks/Header';

const Blogs = () => {
  const datas = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil enim et blanditiis dolorum dolore aspernatur eaque provident. Modi eveniet repudiandae mollitia cumque, aliquid id. Autem ipsam officiis pariatur eos blanditiis nostrum? Sunt, sint expedita quas magni, tempora dolorum culpa totam quo minus necessitatibus minima doloremque, nobis quod. Corporis laudantium non at dolore. Culpa natus cumque inventore? Nam itaque ea eaque magni, expedita voluptatem officiis quos mollitia perspiciatis et molestias, quae illo, impedit ducimus tempore iure rerum! Placeat fuga voluptatem vero porro, culpa, praesentium qui aliquam fugiat et sed at omnis recusandae neque exercitationem unde maxime. Nesciunt quas eaque nobis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil enim et blanditiis dolorum dolore aspernatur eaque provident. Modi eveniet repudiandae mollitia cumque, aliquid id. Autem ipsam officiis pariatur eos blanditiis nostrum? Sunt, sint expedita quas magni, tempora dolorum culpa totam quo minus necessitatibus minima doloremque, nobis quod. Corporis laudantium non at dolore. Culpa natus cumque inventore? Nam itaque ea eaque magni, expedita voluptatem officiis quos mollitia perspiciatis et molestias, quae illo, impedit ducimus tempore iure rerum! Placeat fuga voluptatem vero porro, culpa, praesentium qui aliquam fugiat et sed at omnis recusandae neque exercitationem unde maxime. Nesciunt quas eaque nobis."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nihil enim et blanditiis dolorum dolore aspernatur eaque provident. Modi eveniet repudiandae mollitia cumque, aliquid id. Autem ipsam officiis pariatur eos blanditiis nostrum? Sunt, sint expedita quas magni, tempora dolorum culpa totam quo minus necessitatibus minima doloremque, nobis quod. Corporis laudantium non at dolore. Culpa natus cumque inventore? Nam itaque ea eaque magni, expedita voluptatem officiis quos mollitia perspiciatis et molestias, quae illo, impedit ducimus tempore iure rerum! Placeat fuga voluptatem vero porro, culpa, praesentium qui aliquam fugiat et sed at omnis recusandae neque exercitationem unde maxime. Nesciunt quas eaque nobis."
    }
  ]
  return (
    <div>
      <Header bg="bg-gray-50" bg2="bg-gray-900" />
      <div className="container ">
        <div className='py-20 mt-6'>
          {
            datas?.map((data, index) =>
              <div key={index} className="flex flex-col shadow-lg p-5 my-4 rounded-md" >
                <div className="w-full md:w-8/12 self-start text-xl border-b-2 border-green-500 mb-3 pb-3 rounded-xl sm:text-2xl">{data?.question}</div>
                <div style={{fontSize: '16px'}} className="w-full md:w-8/12 self-center border-b rounded-3xl p-2 sm:p-5 border-green-600">{data?.answer}</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Blogs;