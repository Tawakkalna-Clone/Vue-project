<template>
  <div
    class="
      flued-container
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
    style="
      margin-top: 15em;
      margin-bottom: 15em;
      padding: 0 10em;
      background-color: #f8fbff;
    "
  >
    <h1 class="my-5 display-4" style="color: #1fa99a">الأسئلة الشائعة</h1>
    <div
      class="
        slider
        d-flex
        flex-row
        justify-content-center
        w-100
        border-bottom border-dark
      "
    >
      <ul
        class="
          d-flex
          flex-row-reverse
          justify-content-between
          align-items-between
          w-75
          text-center
          mb-0
        "
      >
        <li
          class="
            h5
            font-weight-lighter
            border-bottom border-3 border-danger
            mb-0
            pb-3
          "
        >
          عام
        </li>
        <li class="h5 font-weight-lighter mb-0">تحميل التطيبق</li>
        <li class="h5 font-weight-lighter mb-0">التسجيل والدخول</li>
        <li class="h5 font-weight-lighter mb-0">تعديل البيانات الشخصية</li>
        <li class="h5 font-weight-lighter mb-0">خدمات التطبيق</li>
      </ul>
    </div>
    <div class="accordion w-75" id="accordionExample" style="margin-top: 5em">
      <div class="accordion-item my-4 shadow-sm rounded-3 border-0 p-3">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed d-flex flex-row-reverse w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            ما هي خاصية تقديم طلب الحصول على لقاح كورونا؟
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse border-0"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body border-0">
            <p class="text-end">
              تتيح لك هذه الخاصية التقديم على طلب الحصول على لقاح كورونا، وذلك
              بتعبئة استمارة تقديم طلب الحصول على لقاح كورونا التي تطلب معلومات
              شخصية ومعلومات العمل ومعلومات صحية.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item my-4 shadow-sm rounded-3 border-0 p-3">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed d-flex flex-row-reverse w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            كيف يمكنني تقديم طلب الحصول على لقاح كورونا؟
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse border-0"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body border-0">
            <p class="text-end">
              من الصفحة الرئيسة اختر (الخدمات).
              <br />من قائمة (خدمات الصحة) اختر (لقاح كورونا). <br />يمكنك
              استعراض بطاقات المستفيدين. <br />اختر (تقديم طلب).
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item my-4 shadow-sm rounded-3 border-0 p-3">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed d-flex flex-row-reverse w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            هل بإمكاني تقديم طلب الحصول على لقاح كورونا لأحد التابعين لدي؟
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse border-0"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body border-0">
            <p class="text-end">
              نعم يمكنك تقديم طلب الحصول على لقاح كورونا لأحد التابعين أو
              المكفولين.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item my-4 shadow-sm rounded-3 border-0 p-3">
        <h2 class="accordion-header" id="headingFuor">
          <button
            class="accordion-button collapsed d-flex flex-row-reverse w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFuor"
            aria-expanded="false"
            aria-controls="collapseFuor"
          >
            طلب الحصول على اللقاح لأحد التابعين غير ظاهر، ماذا أفعل؟
          </button>
        </h2>
        <div
          id="collapseFuor"
          class="accordion-collapse collapse border-0"
          aria-labelledby="headingFuor"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body border-0">
            <p class="text-end">
              إما أن التابع قد قام بالتقديم مسبقاً، أو أنه ليس من الفئة ذات
              الأولوية.
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item my-4 shadow-sm rounded-3 border-0 p-3">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed d-flex flex-row-reverse w-100"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            طلبت الحصول على لقاح كورونا ولكن لا يمكنني استعراض الطلب؟
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse border-0"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body border-0">
            <p class="text-end">
              في حال تم تقديم الطلب وكان لايزال تحت المعالجة ستعرض الحالة وتاريخ
              التقديم فقط، وفي حال عدم ظهورهما يرجى التواصل مع خدمة العملاء.
            </p>
          </div>
        </div>
      </div>
    </div>
    <a href="#" class="show-more">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-down font-weight-bold"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
      عرض المزيد</a
    >
  </div>
</template>

<style scoped src="../../../node_modules/bootstrap/dist/css/bootstrap.min.css"></style>



<style scoped>
.show-more {
  text-decoration: none;
  color: #1fa99a;
  margin: 3em 0 5em;
}
.show-more:hover {
  color: #e0585d;
}
.accordion-button::after {
  color: #1fa99a;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0;
  margin-right: auto;
  content: "";
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
  transform: rotate(-270deg);
}
.accordion-button:not(.collapsed)::after {
  color: #1fa99a;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: rotate(-360deg);
}
.accordion-button:not(.collapsed) {
  color: #1fa99a;

  color: #000 !important;
  background-color: #fff !important;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}
.accordion-button:hover {
  color: #1fa99a !important;
}
</style>