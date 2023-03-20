-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 20, 2023 at 09:31 AM
-- Server version: 10.11.2-MariaDB-1:10.11.2+maria~ubu2204
-- PHP Version: 8.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `geoapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE `district` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `lat` int(11) DEFAULT NULL,
  `long` int(11) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `division_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`id`, `name`, `namebn`, `lat`, `long`, `created_at`, `updated_at`, `division_id`) VALUES
(1, 'BARGUNA', 'বরগুনা', NULL, NULL, '0000-00-00 00:00:00.000000', '2017-02-14 15:55:15.000000', 1),
(2, 'BARISAL', 'বরিশাল', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 1),
(3, 'BHOLA', 'ভোলা', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 1),
(4, 'JHALOKATI', 'ঝালকাঠি', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 1),
(5, 'PATUAKHALI', 'পটুয়াখালী ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 1),
(6, 'PIROJPUR', 'পিরোজপুর ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 1),
(7, 'BANDARBAN', 'বান্দরবান', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(8, 'BRAHMANBARIA', 'ব্রাহ্মণবাড়িয়া', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(9, 'CHANDPUR', 'চাঁদপুর', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(10, 'CHITTAGONG', 'চট্টগ্রাম', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(11, 'COMILLA', 'কুমিল্লা', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(12, 'COX\'S BAZAR', 'কক্সবাজার ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(13, 'FENI', 'ফেনী', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(14, 'KHAGRACHHARI', 'খাগড়াছড়ি', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(15, 'LAKSHMIPUR', 'লক্ষ্মীপুর', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(16, 'NOAKHALI', 'নোয়াখালী', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(17, 'RANGAMATI', 'রাঙ্গামাটি', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 2),
(18, 'DHAKA', 'ঢাকা ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(19, 'FARIDPUR', 'ফরিদপুর ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(20, 'GAZIPUR', 'গাজীপুর ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(21, 'GOPALGANJ', 'গোপালগঞ্জ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(22, 'JAMALPUR', 'জামালপুর ', NULL, NULL, '0000-00-00 00:00:00.000000', '2016-02-09 14:08:46.000000', 9),
(23, 'KISHOREGONJ', 'কিশোরগঞ্জ ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(24, 'MADARIPUR', 'মাদারীপুর ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(25, 'MANIKGANJ', 'মানিকগঞ্জ ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(26, 'MUNSHIGANJ', 'মুন্সিগঞ্জ ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(27, 'MYMENSINGH', 'ময়মনসিংহ ', NULL, NULL, '0000-00-00 00:00:00.000000', '2016-02-09 19:32:20.000000', 9),
(28, 'NARAYANGANJ', 'নারায়ণগঞ্জ ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(29, 'NARSINGDI', 'নরসিংদী ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(30, 'NETRAKONA', 'নেত্রকোণা ', NULL, NULL, '0000-00-00 00:00:00.000000', '2016-02-09 19:31:29.000000', 9),
(31, 'RAJBARI', 'রাজবাড়ী ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(32, 'SHARIATPUR', 'শরীয়তপুর  ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(33, 'SHERPUR', 'শেরপুর ', NULL, NULL, '0000-00-00 00:00:00.000000', '2016-02-09 19:31:55.000000', 9),
(34, 'TANGAIL', 'টাঙ্গাইল ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 3),
(35, 'BAGERHAT', 'বাগেরহাট', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(36, 'CHUADANGA', 'চুয়াডাঙ্গা ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(37, 'JESSORE', 'যশোর ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(38, 'JHENAIDAH', 'ঝিনাইদহ ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(39, 'KHULNA', 'খুলনা ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(40, 'KUSHTIA', 'কুষ্টিয়া ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(41, 'MAGURA', 'মাগুরা', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(42, 'MEHERPUR', 'মেহেরপুর ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(43, 'NARAIL', 'নড়াইল ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(44, 'SATKHIRA', 'সাতক্ষীরা ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 4),
(45, 'BOGRA', 'বগুড়া ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 5),
(46, 'JOYPURHAT', 'জয়পুরহাট', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 5),
(47, 'NAOGAON', 'নওগাঁ ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 5),
(48, 'NATORE', 'নাটোর ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 5),
(49, 'CHAPAI NABABGANJ', 'চাঁপাই নাবাবগঞ্জ ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 5),
(50, 'PABNA', 'পাবনা', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 5),
(51, 'RAJSHAHI', 'রাজশাহী ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 5),
(52, 'SIRAJGANJ', 'সিরাজগঞ্জ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 5),
(53, 'DINAJPUR', 'দিনাজপুর ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 6),
(54, 'GAIBANDHA', 'গাইবান্ধা ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 6),
(55, 'KURIGRAM', 'কুড়িগ্রাম ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 6),
(56, 'LALMONIRHAT', 'লালমনিরহাট ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 6),
(57, 'NILPHAMARI', 'নীলফামারী', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 6),
(58, 'PANCHAGARH', 'পঞ্চগড় ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 6),
(59, 'RANGPUR', 'রংপুর ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 6),
(60, 'THAKURGAON', 'ঠাকুরগাঁও', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 6),
(61, 'HABIGANJ', 'হবিগঞ্জ ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 7),
(62, 'MAULVIBAZAR', 'মৌলভীবাজার ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 7),
(63, 'SUNAMGANJ', 'সুনামগঞ্জ ', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 7),
(64, 'SYLHET', 'সিলেট', NULL, NULL, '0000-00-00 00:00:00.000000', '0000-00-00 00:00:00.000000', 7);

-- --------------------------------------------------------

--
-- Table structure for table `division`
--

CREATE TABLE `division` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `lat` double NOT NULL DEFAULT 0,
  `long` double NOT NULL DEFAULT 0,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `division`
--

INSERT INTO `division` (`id`, `name`, `namebn`, `lat`, `long`, `created_at`, `updated_at`) VALUES
(1, 'Barisal', 'বরিশাল', 22.701, 90.3535, '2023-03-20 09:16:50.970016', '2023-03-20 09:16:50.970016'),
(2, 'Chittagong', 'চট্টগ্রাম', 22.3569, 91.7832, '2023-03-20 09:16:50.970016', '2023-03-20 09:16:50.970016'),
(3, 'Dhaka', 'ঢাকা', 23.8103, 90.4125, '2023-03-20 09:16:50.970016', '2023-03-20 09:16:50.970016'),
(4, 'Khulna', 'খুলনা', 22.8456, 89.5403, '2023-03-20 09:16:50.970016', '2023-03-20 09:16:50.970016'),
(5, 'Rajshahi', 'রাজশাহী', 24.3745, 88.6042, '2023-03-20 09:16:50.970016', '2023-03-20 09:16:50.970016'),
(6, 'Rangpur', 'রংপুর', 25.7439, 89.2752, '2023-03-20 09:16:50.970016', '2023-03-20 09:16:50.970016'),
(7, 'Sylhet', 'সিলেট', 24.8949, 91.8687, '2023-03-20 09:16:50.970016', '2023-03-20 09:16:50.970016'),
(9, 'Mymensingh', 'ময়মনসিংহ', 24.7471, 90.4203, '2023-03-20 09:16:50.970016', '2023-03-20 09:16:50.970016');

-- --------------------------------------------------------

--
-- Table structure for table `microarea`
--

CREATE TABLE `microarea` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `lat` int(11) NOT NULL,
  `long` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `municipality`
--

CREATE TABLE `municipality` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `lat` int(11) NOT NULL,
  `long` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `thana`
--

CREATE TABLE `thana` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `lat` int(11) NOT NULL,
  `long` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `union`
--

CREATE TABLE `union` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `lat` int(11) NOT NULL,
  `long` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `upazila`
--

CREATE TABLE `upazila` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `lat` int(11) NOT NULL,
  `long` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ward`
--

CREATE TABLE `ward` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `lat` int(11) NOT NULL,
  `long` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE `zone` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `namebn` varchar(255) NOT NULL,
  `lat` int(11) NOT NULL,
  `long` int(11) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_3212c7b175a6bb4bcf82ff2b899` (`division_id`);

--
-- Indexes for table `division`
--
ALTER TABLE `division`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `microarea`
--
ALTER TABLE `microarea`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `municipality`
--
ALTER TABLE `municipality`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `thana`
--
ALTER TABLE `thana`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `union`
--
ALTER TABLE `union`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upazila`
--
ALTER TABLE `upazila`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ward`
--
ALTER TABLE `ward`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zone`
--
ALTER TABLE `zone`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `district`
--
ALTER TABLE `district`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `division`
--
ALTER TABLE `division`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `microarea`
--
ALTER TABLE `microarea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `municipality`
--
ALTER TABLE `municipality`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `thana`
--
ALTER TABLE `thana`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `union`
--
ALTER TABLE `union`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `upazila`
--
ALTER TABLE `upazila`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ward`
--
ALTER TABLE `ward`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `zone`
--
ALTER TABLE `zone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `district`
--
ALTER TABLE `district`
  ADD CONSTRAINT `FK_3212c7b175a6bb4bcf82ff2b899` FOREIGN KEY (`division_id`) REFERENCES `division` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
