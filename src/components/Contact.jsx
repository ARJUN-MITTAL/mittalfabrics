


// import React from 'react';
// import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);
//     formData.append("access_key", "98a0d308-cc59-4261-bf8e-37eb8ada23cb");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("");
//       toast.success("Form submitted successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       toast.error(data.message);
//       setResult("");
//     }
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, x: -100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       className="text-center p-6 py-20 lg:px-32 w-full font-sans bg-white"
//       id="Contact"
//     >
//       <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center text-gray-800">
//         Contact <span className="underline underline-offset-4 decoration-blue-500 font-light">With Us</span>
//       </h1>
//       <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
//         Ready to Make a Move? Let's Build Your Future Together
//       </p>

//       <div className="flex flex-col lg:flex-row items-stretch gap-10 justify-center">
//         {/* Contact Info Box */}
// <div className="w-full lg:w-1/2 bg-white rounded-lg p-8 shadow-lg flex flex-col justify-between h-full">
//   <div>
//     <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
//     <div className="space-y-6 text-gray-700 text-lg">
//       <p>
//         <span className="font-semibold">Email:</span><br />
//         mittalfabrics11@gmail.com
//       </p>
//       <p>
//         <span className="font-semibold">Phone:</span><br />
//         +91 7017671856
//       </p>
//       <p>
//         <span className="font-semibold">Address:</span><br />
//         Teen murti mandir road, Arya Nagar, Pilkhuwa, <br />
//         Uttar Pradesh, India 245304
//       </p>
//     </div>
//   </div>
// </div>


//         {/* Form */}
//         <form 
//           onSubmit={onSubmit}
//           className="w-full lg:w-1/2 text-gray-700 bg-white border border-gray-200 rounded-lg p-8 shadow-lg"
//         >
//           <div className="flex flex-wrap gap-4">
//             <div className="w-full md:w-1/2 text-left">
//               <label className="block mb-2 text-sm font-medium">Your Name</label>
//               <input
//                 className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 type="text"
//                 name="Name"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>
//             <div className="w-full md:w-1/2 text-left">
//               <label className="block mb-2 text-sm font-medium">Your Email</label>
//               <input
//                 className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 type="email"
//                 name="Email"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>
//           </div>
//           <div className="my-6 text-left">
//             <label className="block mb-2 text-sm font-medium">Message</label>
//             <textarea
//               className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
//               name="Message"
//               placeholder="Type your message here..."
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-12 rounded transition duration-300 ease-in-out"
//           >
//             {result ? result : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// export default Contact;


import React from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    formData.append('access_key', '98a0d308-cc59-4261-bf8e-37eb8ada23cb');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('');
      toast.success('Form submitted successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      toast.error(data.message);
      setResult('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center py-20 px-4 md:px-10 lg:px-32 bg-white font-sans"
      id="Contact"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-900">
        Contact <span className="underline underline-offset-8 decoration-blue-500 font-light">With Us</span>
      </h1>
      <p className="text-gray-500 mb-12 max-w-xl mx-auto text-base sm:text-lg">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      {/* Container */}
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-stretch">
        
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl p-8 shadow-md text-left border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1 text-blue-600" />
              <div>
                <span className="font-semibold">Email:</span><br />
                mittalfabrics11@gmail.com
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1 text-blue-600" />
              <div>
                <span className="font-semibold">Phone:</span><br />
                +91 7017671856
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 text-blue-600" />
              <div>
                <span className="font-semibold">Address:</span><br />
                Teen Murti Mandir Road, Arya Nagar, Pilkhuwa,<br />
                Uttar Pradesh, India 245304
              </div>
            </div>

          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="w-full lg:w-1/2 bg-white border border-gray-100 rounded-2xl p-8 shadow-md text-left"
        >
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="my-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="Message"
              placeholder="Type your message here..."
              required
              className="w-full border border-gray-300 rounded-md py-3 px-4 h-40 resize-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-10 rounded-md font-medium transition duration-300 ease-in-out"
          >
            {result ? result : 'Send Message'}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
