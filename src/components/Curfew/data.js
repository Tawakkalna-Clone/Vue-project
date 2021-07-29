import License from "../../assets/driver-license.png";
import Scan from "../../assets/qrScan.png";
import Grocery from "../../assets/grocery.png";
import Permit from "../../assets/permit.png";
import Hired from "../../assets/hired.png";
import Insurance from "../../assets/insurance.png";
import QrCode from "../../assets/qr-code.png";
import Report from "../../assets/medical-report.png";

const data = [
  {
    serviceId: 1,
    serviceIcon: License,
    serviceName: "استعراض المخالفات",
    serviceDesc:
      "تُمكِّن هذه الخدمة استعراض مخالفات المُستخدم المتعلقة بمنع التجول",
  },
  {
    serviceId: 2,
    serviceIcon: Scan,
    serviceName: "الاستعلام عن مخالفات شخص آخر",
    serviceDesc:
      "توفِّر الخدمة إمكانيَّة الاستعلام عن مخالفات شخص آخر، وتسهل استعراض المخالفات للأشخاص الذين ليس لديهم اطِّلاع عن كيفيَّة استعمال التطبيق مثل كبار السن وغيرهم.",
  },
  {
    serviceId: 3,
    serviceIcon: Grocery,
    serviceName: "طلب تصاريح التموين داخل الحي",
    serviceDesc:
      "خلال فترة المنع الكلي بشكل إلكتروني عن طريق التطبيق بحيث تتم معالجة الطلبات آليًا.",
  },
  {
    serviceId: 4,
    serviceIcon: Permit,
    serviceName: "طلب تصاريح الخروج",
    serviceDesc: "للحصول على التموين الضروري خلال فترة المنع عن طريق التطبيق",
  },
  {
    serviceId: 5,
    serviceIcon: Hired,
    serviceName: "استعراض تصاريح العمل",
    serviceDesc:
      "بشكل إلكتروني لتسهيل عملية انتقال موظفي الجهات الحكومية وشركات القطاع الخاص المستثناة من المنع",
  },
  {
    serviceId: 6,
    serviceIcon: Insurance,
    serviceName:
      "الإجابة عن الأسئلة الصحية لدعم وزارة الصحة في متابعة تلك الحالات",
    serviceDesc:
      "ويمكن التبليغ عن حالات الاشتباه وإيصال ذلك للجهات المعنية لمساعدة المستخدم على تلقي الخدمات الصحية.",
  },
  {
    serviceId: 7,
    serviceIcon: QrCode,
    serviceName:
      "اســـتــعـــراض الــــكــود الــــخـــــاص بالمستخدم QR لرجل الأمن ",
    serviceDesc: "للإسهام في تسريع عملية التحقق والمرور للمواطنين والمقيمين.",
  },
  {
    serviceId: 8,
    serviceIcon: Report,
    serviceName: "استعراض آخر المستجدات الصحية والطبية",
    serviceDesc: "المتعلقة بانتشار الوباء وسبل الوقاية منه.",
  },
];

export default data;
