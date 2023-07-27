import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

export default function Design() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      {/* start Header */}
      <div className="flex flex-col w-full">
        <div className="top flex items-center justify-between px-[80px] py-2">
          <Image src="/logo.png" alt="me" width="150" height="64" />
          <div className="search-group flex items-center justify-end bg-pinkish_red bg-opacity-10 w-[60%]">
            <span className="p-2 rounded-[5px] bg-pinkish_red text-white h-10 w-10">
              <AiOutlineSearch size={18} className="text-white" />
            </span>
            <input
              type="text"
              placeholder="ابحث هنا"
              className="top-search bg-transparent p-2 h-10"
              dir="rtl"
            />
            <button className="flex items-center text-pinkish_red h-10 p-2 text-[14px] ">
              <BiChevronDown size={20} className="" />
              مزاد مباشر متعدد
            </button>
          </div>
        </div>
        <div className="bottom flex justify-between items-center bg-magenta_red px-[80px] py-5">
          <div className="left flex">
            <button className="flex items-center text-white h-10 p-2">
              <BiChevronDown size={20} className="" />
              عربية
            </button>

            <span className="p-2 h-10 w-10">
              <Image
                src="/icons/favorite.png"
                alt="me"
                width="24"
                height="24"
              />
            </span>
            <span className="p-2 h-10 w-10">
              <Image
                src="/icons/notifications.png"
                alt="me"
                width="24"
                height="24"
              />
            </span>
            <span className="p-2 h-10 w-10">
              <Image
                src="/icons/price_change.png"
                alt="me"
                width="24"
                height="24"
              />
            </span>
          </div>
          <div className="right">
            <ul className="flex">
              <li className="mx-3">
                <a href="#" className="text-white">
                  حسابى
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-white">
                  مشترياتى
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-white">
                  التصنيفات
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-white">
                  الرئيسية
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end Header */}
      {/* start Content */}
      <div className="flex w-full px-[80px] py-5">
        <div className="side flex flex-col w-[30%]">
          <div className="box p-4 mb-2 bg-white">
            <div className="history flex justify-between items-center rounded bg-dark_gray_1 text-white p-2">
              <span>22-1-2022</span>
              <span>تاريخ البث</span>
            </div>
            <div className="values flex justify-between py-2">
              <div className="value mr-1 flex-1 flex flex-col justify-between items-center rounded p-2 pb-6 bg-pinkish_purple bg-opacity-10 text-pinkish_purple">
                <span>القيمة الحالية بعد الضريبة</span>
                <span className="text-[24px] font-bold">
                  <small>$</small> 5050
                </span>
              </div>
              <div className="value ml-1 flex-1 flex flex-col justify-between items-center rounded p-2 pb-6 relative bg-pinkish_purple text-white">
                <span>القيمة الحالية للمزاد</span>
                <span className="text-[24px] font-bold">
                  <small>$</small> 5000
                </span>
                <span className="person flex absolute top-[100%] left-[50%] bg-white rounded-full  ">
                  <span className="text-pinkish_purple flex-1 text-center">
                    أحمد الرائد
                  </span>
                  <Image
                    src="/person1.jpg"
                    alt="me"
                    width="18"
                    height="18"
                    className="rounded-full"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="box p-4 mb-2 bg-white">
            <div className="contenders" dir="rtl">
              <p className="title text-dark_gray_4 text-[20px] font-bold">
                المتنافسون
              </p>
              <ul className="flex flex-col">
                <li className="flex justify-between items-center">
                  <div className="content flex items-center">
                    <Image
                      src="/person1.jpg"
                      alt="me"
                      width="44"
                      height="44"
                      className="rounded-full"
                    />
                    <div className="info m-2">
                      <p className="text-dark_gray_1 text-[14px] font-bold">
                        اسم المزايد
                      </p>
                      <span className="text-dark_gray_2 text-[12px]">
                        13:59:00
                      </span>
                    </div>
                  </div>
                  <div className="value">
                    <span className="flex justify-center items-center px-3 py-1 text-[22px] font-bold bg-orange_yellow bg-opacity-10 text-orange_yellow">
                      +20
                    </span>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className="content flex items-center">
                    <Image
                      src="/person2.jpg"
                      alt="me"
                      width="44"
                      height="44"
                      className="rounded-full"
                    />
                    <div className="info m-2">
                      <p className="text-dark_gray_1 text-[14px] font-bold">
                        اسم المزايد
                      </p>
                      <span className="text-dark_gray_2 text-[12px]">
                        13:59:00
                      </span>
                    </div>
                  </div>
                  <div className="value">
                    <span className="flex justify-center items-center px-3 py-1 text-[22px] font-bold bg-orange_yellow bg-opacity-10 text-orange_yellow">
                      +20
                    </span>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className="content flex items-center">
                    <Image
                      src="/person3.jpg"
                      alt="me"
                      width="44"
                      height="44"
                      className="rounded-full"
                    />
                    <div className="info m-2">
                      <p className="text-dark_gray_1 text-[14px] font-bold">
                        اسم المزايد
                      </p>
                      <span className="text-dark_gray_2 text-[12px]">
                        13:59:00
                      </span>
                    </div>
                  </div>
                  <div className="value">
                    <span className="flex justify-center items-center px-3 py-1 text-[22px] font-bold bg-orange_yellow bg-opacity-10 text-orange_yellow">
                      +20
                    </span>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className="content flex items-center">
                    <Image
                      src="/person4.jpg"
                      alt="me"
                      width="44"
                      height="44"
                      className="rounded-full"
                    />
                    <div className="info m-2">
                      <p className="text-dark_gray_1 text-[14px] font-bold">
                        اسم المزايد
                      </p>
                      <span className="text-dark_gray_2 text-[12px]">
                        13:59:00
                      </span>
                    </div>
                  </div>
                  <div className="value">
                    <span className="flex justify-center items-center px-3 py-1 text-[22px] font-bold bg-orange_yellow bg-opacity-10 text-orange_yellow">
                      +20
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="box p-4 mb-2 bg-white">
            <ul className="flex flex-col" dir="rtl">
              <li className="flex justify-between text-dark_gray_3 bg-dark_gray_3 bg-opacity-10 mb-2 p-2 rounded ">
                <div className="content flex items-center text-[12px]">
                  القيمة الابتدائية
                </div>
                <div className="value font-bold text-[24px]">5000</div>
              </li>

              <li className="flex justify-between text-dark_gray_3 bg-dark_gray_3 bg-opacity-10 mb-2 p-2 rounded ">
                <div className="content flex items-center text-[12px]">
                  القيمة التقريبية
                </div>
                <div className="value font-bold text-[24px]">5000</div>
              </li>
              <li className="flex justify-between text-dark_gray_3 bg-dark_gray_3 bg-opacity-10 mb-2 p-2 rounded ">
                <div className="content flex items-center text-[12px]">
                  العربون
                </div>
                <div className="value font-bold text-[24px]">5000</div>
              </li>
              <li className="flex justify-between text-dark_gray_3 bg-dark_gray_3 bg-opacity-10 mb-2 p-2 rounded ">
                <div className="content flex items-center text-[12px]">
                  سعر الشراء الفورى
                </div>
                <div className="value font-bold text-[24px]">5000</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-content flex" dir="rtl">
          <div className="slide-toggler">
            <div className="toggler up flex justify-center ">
              <div className="bg-white rounded p-2">
                <BiChevronUp size={20} className="" />
              </div>
            </div>
            <div className="slides flex flex-col ">
              <div className="rounded my-1 overflow-hidden ">
                <Image src="/cars/car1.png" alt="me" width="78" height="78" />
              </div>
              <div className="rounded my-1 overflow-hidden ">
                <Image src="/cars/car1.png" alt="me" width="78" height="78" />
              </div>
              <div className="rounded my-1 overflow-hidden ">
                <Image src="/cars/car1.png" alt="me" width="78" height="78" />
              </div>
              <div className="rounded my-1 overflow-hidden ">
                <Image src="/cars/car1.png" alt="me" width="78" height="78" />
              </div>
              <div className="rounded my-1 overflow-hidden ">
                <Image src="/cars/car1.png" alt="me" width="78" height="78" />
              </div>
            </div>
            <div className="toggler down flex justify-center ">
              <div className="bg-white rounded p-2">
                <BiChevronDown size={20} className="" />
              </div>
            </div>
          </div>
          <div className="details mx-1 relative overflow-hidden rounded pb-2">
            <div className="absolute w-full flex justify-between mt-2 px-2">
              <div className="details-values flex items-center bg-black bg-opacity-50 rounded px-2 py-1">
                <div className="time text-gray_4 p-1">02:00</div>
                <div className="views flex items-center p-1">
                  <Image
                    src="/icons/noun_show.png"
                    alt="me"
                    width="20"
                    height="20"
                  />
                  <small className="text-gray_4 mr-1">3000</small>
                </div>
              </div>
              <ul className="flex actions">
                <li className="mr-2 p-2 h-10 w-10 rounded-full bg-black bg-opacity-50">
                  <Image
                    src="/icons/flag.png"
                    alt="me"
                    width="24"
                    height="24"
                  />
                </li>
                <li className="mr-2 p-2 h-10 w-10 rounded-full bg-black bg-opacity-50">
                  <Image
                    src="/icons/noun_Love.png"
                    alt="me"
                    width="24"
                    height="24"
                  />
                </li>
                <li className="mr-2 p-2 h-10 w-10 rounded-full bg-black bg-opacity-50">
                  <Image
                    src="/icons/share.png"
                    alt="me"
                    width="24"
                    height="24"
                  />
                </li>
              </ul>
            </div>
            <Image src="/cars/preview.jpg" alt="me" width="900" height="78" />
            <div className="details-content px-2">
              <div className="person-details flex items-center">
                <Image
                  src="/person1.jpg"
                  alt="me"
                  width="44"
                  height="44"
                  className="rounded-full"
                />
                <div className="text-pinkish_purple info m-2">
                  <p className=" font-bold text-[16px]">اسم البائع</p>
                  <span className="text-[16px]">+966598398</span>
                </div>
                <div className="stars flex">
                  <Image
                    src="/icons/star_gray.png"
                    alt="me"
                    width="22"
                    height="22"
                    className="px-0.5"
                  />
                  <Image
                    src="/icons/star_gold.png"
                    alt="me"
                    width="22"
                    height="22"
                    className="px-0.5"
                  />
                  <Image
                    src="/icons/star_gold.png"
                    alt="me"
                    width="22"
                    height="22"
                    className="px-0.5"
                  />
                  <Image
                    src="/icons/star_gold.png"
                    alt="me"
                    width="22"
                    height="22"
                    className="px-0.5"
                  />
                  <Image
                    src="/icons/star_gold.png"
                    alt="me"
                    width="22"
                    height="22"
                    className="px-0.5"
                  />
                </div>
              </div>
              <div className="title text-dark_gray_1 text-[20px] font-bold">
                شراء مجموعة من السيارات من موديلات1990
              </div>
              <small className="code text-[12px] text-dark_gray_2">
                code 1234
              </small>
              <div className="sample flex justify-between mt-3">
                <div className="sample-values flex">
                  <a
                    href=""
                    className="flex items-center text-pinkish_red px-3 py-1 bg-pinkish_red bg-opacity-10 ml-2 rounded"
                  >
                    +1000
                  </a>
                  <a
                    href=""
                    className="flex items-center text-pinkish_red px-3 py-1 bg-pinkish_red bg-opacity-10 ml-2 rounded"
                  >
                    +1000
                  </a>
                  <a
                    href=""
                    className="flex items-center text-pinkish_red px-3 py-1 bg-pinkish_red bg-opacity-10 ml-2 rounded"
                  >
                    +1000
                  </a>
                </div>
                <div className="samole-form">
                  <input
                    type="text"
                    placeholder="ابحث هنا"
                    className="bottom-search bg-transparent px-3 py-1 ml-2 rounded"
                    dir="rtl"
                  />
                  <a
                    href=""
                    className="bg-gradient-to-r from-pinkish_red to-magenta_red text-white px-5 py-1 rounded"
                  >
                    تأكيد
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end Content */}
    </main>
  );
}
