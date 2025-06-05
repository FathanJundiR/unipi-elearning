import PageMeta from "../../components/common/PageMeta";
import { BoxIconLine, FolderIcon, GroupIcon, TaskIcon } from "../../icons";

export default function Home() {
  return (
    <>
      <PageMeta
        title="E-Learning UNIPI"
        description="Universitas Pembagunana indonesia"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {/* <!-- Metric Item Start --> */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
              </div>

              <div className="flex items-end justify-between mt-5">
                <div>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    Users
                  </span>
                  <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                    0
                  </h4>
                </div>
                =
              </div>
            </div>
            {/* <!-- Metric Item End --> */}

            {/* <!-- Metric Item Start --> */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <FolderIcon className="text-gray-800 size-6 dark:text-white/90" />
              </div>
              <div className="flex items-end justify-between mt-5">
                <div>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    Kelas
                  </span>
                  <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                    0
                  </h4>
                </div>
              </div>
            </div>
            {/* <!-- Metric Item Start --> */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
              </div>
              <div className="flex items-end justify-between mt-5">
                <div>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    Matakuliah
                  </span>
                  <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                    0
                  </h4>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                <TaskIcon className="text-gray-800 size-6 dark:text-white/90" />
              </div>
              <div className="flex items-end justify-between mt-5">
                <div>
                  <span className="text-lg text-gray-500 dark:text-gray-400">
                    Pengumuman
                  </span>
                  <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                    0
                  </h4>
                </div>
              </div>
            </div>
            {/* <!-- Metric Item End --> */}
          </div>
        </div>

        <div className="col-span-12 xl:col-span-5">
          <div className="rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
              <div className="flex justify-center items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white/90 text-center">
                    Selamat Datang
                  </h3>
                  <p className="mt-1 text-gray-500 text-xl dark:text-gray-400 text-center">
                    E-Learning Universitas Pembagunan Indonesia
                  </p>
                  <div className="flex justify-center">
                    <img
                      src="/images/landingpage/logo.png"
                      alt="image"
                      className="items-cente mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
