import { FiTruck } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';

export default function ShippingCard() {
  return (
    <div className="relative w-full h-full flex justify-center">
      <div className="absolute mx-auto bottom-[-2.3rem]">
        <div className="px-10 py-5 text-center rounded-xl bg-white shadow-md dark:bg-gray-900 transition-all">
          <div className="flex flex-row text-black justify-between gap-6 md:gap-8">
            <div className="flex flex-row items-center justify-between gap-4 md:gap-6 dark:text-white transition-all">
              <div className="text-second md:text-3xl dark:text-blue-500 transition-all">
                <FiTruck />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-bold md:text-xl">Pengiriman</h1>
                <span className="text-xs text-main md:text-md dark:text-blue-400 transition-all">Semua Pesanan</span>
              </div>
            </div>
            <div className="border-l-2"></div>
            <div className="flex flex-row items-center justify-between gap-4 dark:text-white transition-all">
              <div className="text-second md:text-3xl dark:text-blue-500 transition-all">
                <CiLocationOn />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-bold md:text-xl">Lokasi Toko</h1>
                <span className="text-xs text-main md:text-md dark:text-blue-400 transition-all">Temukan Toko Terdekat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
