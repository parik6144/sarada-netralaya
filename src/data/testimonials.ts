export type Testimonial = {
  id: string;
  name: string;
  role: string;
  image: string;
  preview: string;
  full: string;
};

/** Real patient & peer reviews — photos live in /public/images/testimonials */
export const testimonials: Testimonial[] = [
  {
    id: 'rajiv-shukla',
    name: 'Dr. Rajiv Shukla',
    role: 'Ex. Head Consultant & HOD Anesthesiology, Tata Main Hospital, Jamshedpur',
    image: '/images/testimonials/Dr. Rajiv Shukla.png',
    preview:
      'As a medical colleague, I have the highest respect for Dr. Nitin Dhira for his exceptional skills as an ophthalmic surgeon…',
    full: `As a medical colleague, I have the highest respect for Dr. Nitin Dhira for his exceptional skills as an ophthalmic surgeon. Having observed his clinical work closely, I am impressed by his surgical precision in advanced cataract and glaucoma treatments. He utilizes the latest surgical advancements to deliver outstanding visual results, always prioritizing patient safety and comfort.

Beyond his technical brilliance, Dr. Dhira treats every patient with genuine warmth and clarity, making them feel safe and informed. I confidently recommend him to anyone seeking top-class eye care.

Note: Surgery by Dr. Nitin G. Dhira was performed at Jamshedpur Eye Hospital, Jamshedpur.`,
  },
  {
    id: 'nand-singh',
    name: 'Nand Singh',
    role: 'Retired Development Officer, LIC of India · Working President, Jamshedpur Division Retired Insurance Employees\' Association',
    image: '/images/testimonials/Nand Singh.png',
    preview:
      'I always preferred Sankara Nethralaya, Chennai for glaucoma. After meeting Dr. Nitin in 2018, and my cataract surgery in 2024, I no longer need to travel…',
    full: `Sarada Netralaya is the super speciality eye care hospital in Jamshedpur. I always preferred to visit Sankara Nethralaya, Chennai for glaucoma treatment. I came to know about Dr. Nitin G. Dhira and met him on 16.07.2018 and started getting treatment from him.

I have an excellent experience at Sarada Netralaya for glaucoma treatment and cataract surgery done by Dr. Nitin on 24.01.2024. I am fully satisfied and I have now no need to visit Sankara Nethralaya, Chennai — because Dr. Nitin is available in Jamshedpur.

Sarada Netralaya is a centre for comprehensive eye care and a preferred eye hospital for the people of Jamshedpur. Doctors and staff are soft spoken, cooperative, well behaved and very attentive. The hospital has the capacity and capability to provide the highest level of eye treatment. I recommend others to visit Sarada Netralaya if needed.`,
  },
  {
    id: 'ratan-shome',
    name: 'Ratan Shome',
    role: 'Retired UCO Branch Manager, Baridih',
    image: '/images/testimonials/Ratan Shome.png',
    preview:
      'Medical treatment is often tough and uncertain. Dr. Nitin G. Dhira is exceptional — my wife has been under his care for a right-eye stroke…',
    full: `Medical treatment is not just tough but also turbulent and unpredictable. Eight out of ten patients feel they are not treated properly.

Doctor Nitin G. Dhira is exceptional in this regard. For the last six months my wife has been under his treatment after she suffered a right-eye stroke. With a group of well-mannered staff, Dr. Dhira has done excellent treatment. I must thank him for his dedicated and skilled care.`,
  },
  {
    id: 'raghubar-sharan',
    name: 'Dr. Raghubar Sharan',
    role: 'Senior Orthopaedic Surgeon · Retired from TMH',
    image: '/images/testimonials/Dr.Raghubar Sharan.png',
    preview:
      'My wife was operated by Dr. Nitin using Johnson & Johnson ODYSSEY Toric Lens — the first time in Jharkhand. Next day her distant vision was 6/6…',
    full: `My wife got operated by Dr. Nitin G. Dhira using Johnson & Johnson ODYSSEY Toric Lens for the first time in Jharkhand. The very next day her distant vision was 6/6 and near vision was N8. After 7 days near vision became N6. We are very much satisfied.`,
  },
  {
    id: 'sarvadeep-singh',
    name: 'Sarvadeep Singh',
    role: 'Retired Tata Steel Officer',
    image: '/images/testimonials/Sarvadeep Singh.png',
    preview:
      'Sarada Netralaya has excellent eye-care facilities. Dr. Nitin is gentle, deeply caring, and an absolute master of his profession…',
    full: `Sarada Netralaya is a professional nursing home with excellent facilities in eye care. Dr. Nitin Dhira is an absolute master of his profession — gentle and deeply caring.

As a very satisfied patient after my phaco surgery, I highly appreciate his personal care, patient-friendly nature, and excellent surgical skills. His services are also very reasonably priced. I strongly recommend him and Sarada Netralaya for any eye care needs.`,
  },
  {
    id: 'rajesh-tulsiyan',
    name: 'Rajesh Tulsiyan',
    role: 'Proprietor, Tulsiyan Tele Marketing',
    image: '/images/testimonials/Rajesh Tulsiyan.png',
    preview:
      'I had my cataract surgery with Dr. Nitin G. Dhira. He is an excellent doctor, and the entire staff was professional, caring and helpful…',
    full: `I had my cataract surgery performed by Dr. Nitin G. Dhira. He is an excellent doctor, and the entire staff was very professional, caring, and helpful throughout the process.

The operation theatre was neat, clean, and well-maintained. I am very satisfied with the treatment and overall experience.`,
  },
  {
    id: 'bimal-kishore',
    name: 'Mr. Bimal Kishore',
    role: 'Chief, Raw Material Management, Tata Steel',
    image: '/images/testimonials/Mr Bimal Kishore.png',
    preview:
      'I underwent cataract surgery performed by Dr. Nitin G. Dhira, and I am extremely satisfied with the entire experience…',
    full: `I underwent cataract surgery performed by Dr. Nitin G. Dhira, and I am extremely satisfied with the entire experience. Dr. Dhira demonstrated exceptional surgical expertise, professionalism, and compassion throughout my treatment. The procedure was smooth, and my vision has improved significantly.

I sincerely thank Dr. Nitin G. Dhira and would highly recommend him to anyone seeking advanced cataract treatment.

Note: Surgery by Dr. Nitin G. Dhira was performed at Jamshedpur Eye Hospital, Jamshedpur.`,
  },
  {
    id: 'sridhar-pradhan',
    name: 'Dr. Sridhar Pradhan',
    role: 'Ex Chief of Medical & Indoor Services, Tata Main Hospital, Jamshedpur',
    image: '/images/testimonials/Dr Sridhar Pradhan.png',
    preview:
      'My cataract surgery went very well. Vision was perfect just after surgery. As a general surgeon I appreciate Dr. Nitin Dhira’s skills…',
    full: `My cataract surgery went very well. Vision was perfect just after surgery. As a general surgeon I appreciate Dr. Nitin Dhira’s skills and expertise.

I wish him well for his success in future as an ophthalmologist and as a person. God bless!!`,
  },
  {
    id: 'dk-mishra',
    name: 'Dr. D.K. Mishra',
    role: 'Senior Urologist, Jamshedpur',
    image: '/images/testimonials/D.K.Mishra.png',
    preview:
      'I had the privilege of undergoing cataract surgery under the expert care of Dr. Nitin G. Dhira. I am highly impressed by his exceptional surgical skill…',
    full: `I had the privilege of undergoing cataract surgery under the expert care of Dr. Nitin G. Dhira. I am highly impressed by his exceptional surgical skill, meticulous attention to detail, and professional approach throughout the entire treatment process.

The surgery was performed with utmost precision, and my postoperative recovery was smooth and uneventful. My visual outcome has been excellent, reflecting the high standards of care and clinical excellence maintained by Dr. Dhira and his team.

I sincerely appreciate the compassionate care, efficient patient management, and commitment to quality demonstrated by the entire team. I wholeheartedly recommend Dr. Nitin G. Dhira to anyone seeking advanced cataract surgery and comprehensive ophthalmic care.`,
  },
  {
    id: 'sarda-pal',
    name: 'Sarda Pal',
    role: 'Housewife',
    image: '/images/testimonials/Sarda Pal.png',
    preview:
      'I recently underwent cataract surgery performed by Dr. Nitish R. Bhardwaj and I am truly grateful for the excellent care I received…',
    full: `I recently underwent cataract surgery performed by Dr. Nitish R. Bhardwaj and I am truly grateful for the excellent care I received. He is an outstanding doctor—it's hard to express in words how kind, skilled, and reassuring he is.

I was very scared about the surgery, but his calm approach and compassionate care took away half of my fear even before the procedure. The surgery went smoothly, and I felt I was in safe hands throughout.

I would highly recommend Dr. Nitish and Sarada Netralaya to anyone seeking the best eye care. Thank you for the wonderful treatment and support.`,
  },
  {
    id: 'aman-singh',
    name: 'Aman Singh',
    role: 'Tata Motors',
    image: '/images/testimonials/Aman Singh.png',
    preview:
      'I underwent Corneal tear repair surgery performed by Dr. Nitish R. Bhardwaj, and I am extremely satisfied with the care and treatment I received…',
    full: `I underwent Corneal tear repair surgery performed by Dr. Nitish R. Bhardwaj, and I am extremely satisfied with the care and treatment I received. Dr. Bhardwaj handled my case with great expertise, explained the procedure clearly, and made me feel confident throughout the treatment.

The surgery was successful, and my recovery has been smooth. The hospital staff were professional, caring, and supportive at every step.`,
  },
];
