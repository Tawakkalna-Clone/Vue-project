import vaccine from "../../assets/vaccine.png";
import folders from "../../assets/folders.png";
import case2 from "../../assets/002-case.png";
import chat from "../../assets/004-chat.png";
import HomeLocation from "../../assets/HomeLocation.png";
import Syringe from "../../assets/syringe.png";
import Purse from "../../assets/purse.png";
import Identification from "../../assets/identification.png";
const data = [
  {
    serviceId: 1,
    serviceIcon: vaccine,
    serviceName: "لقاح كورونا",
    serviceDesc:
      "خدمة تُمكِّن المستخدم من حجز مواعيد جرعات لقاح كورونا (كوفيد-١٩)بعد التأكد من أهليته",
  },
  {
    serviceId: 2,
    serviceIcon: folders,
    serviceName: "استعراض بيانات الوكالات",
    serviceDesc:
      "خدمة تُمكن المستخدم من استعراض وكالاته المسجلة في وزارة العدل",
  },
  {
    serviceId: 3,
    serviceIcon: case2,
    serviceName: "استعراض بيانات الصكوك",
    serviceDesc:
      "خدمة تتيح للمستخدم استعراض بيانات الصكوك المسجلة لديه في وزارة العدل‏",
  },
  {
    serviceId: 4,
    serviceIcon: chat,
    serviceName: "خدمة تعريف رقم الجوال",
    serviceDesc:
      "تتيح هذه الخدمة تعريف الرقم الخاص بالتابعين أو المكفولين أو أي شخص آخر في تطبيق توكلنا",
  },
  {
    serviceId: 5,
    serviceIcon: HomeLocation,
    serviceName: "خدمة العنوان الوطني",
    serviceDesc:
      "خدمة تمكن المستخدم من إضافة وتحديث عنوانه الوطني المسجل لديه في البريد السعودي مع إمكانية طباعة إثباته",
  },
  {
    serviceId: 6,
    serviceIcon: Syringe,
    serviceName: "الجواز الصحي",
    serviceDesc:
      "خدمة متاحة من خلال تطبيق توكلنا تؤكد أن الشخص قد أكمل جميع الجرعات الخاصة بلقاح فيروس كورونا (كوفيد-١٩) وأصبح محصّن ضد الفيروس بإذن الله",
  },
  {
    serviceId: 7,
    serviceIcon: Purse,
    serviceName: "المحفظة الرقمية",
    serviceDesc:
      "المحفظة الرقمية خدمة تمكن من استعراض الوثائق الرسمية للمستخدم مثل الهوية الوطنية والإقامة رقميًا",
  },
  {
    serviceId: 8,
    serviceIcon: Identification,
    serviceName: "الهوية الرقمية",
    serviceDesc: "خدمة تمكن المستخدم من استعراض هويته الوطنية في التطبيق",
  },
];

export default data;
