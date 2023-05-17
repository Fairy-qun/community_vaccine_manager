/*
 Navicat Premium Data Transfer

 Source Server         : localhost_8
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : vaccine-manager

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 17/05/2023 16:11:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accesses
-- ----------------------------
DROP TABLE IF EXISTS `accesses`;
CREATE TABLE `accesses`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `access_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '权限名称',
  `access_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '权限路径',
  `access_state` tinyint(1) NOT NULL COMMENT '权限状态 0:不可以 1:可用',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of accesses
-- ----------------------------

-- ----------------------------
-- Table structure for inoculatepoints
-- ----------------------------
DROP TABLE IF EXISTS `inoculatepoints`;
CREATE TABLE `inoculatepoints`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `inoculatePoint_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '接种点名称',
  `inoculatePoint_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '接种点地点',
  `inoculatePoint_state` tinyint(1) NULL DEFAULT 1 COMMENT '接种点状态 1：可使用 0：不可使用',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of inoculatepoints
-- ----------------------------
INSERT INTO `inoculatepoints` VALUES (1, '贵阳市南明区龙洞堡社区接种点', '贵阳市南明区龙洞堡社区', 1, '2023-05-15 23:37:44', '2023-05-15 23:37:44');

-- ----------------------------
-- Table structure for inoculates
-- ----------------------------
DROP TABLE IF EXISTS `inoculates`;
CREATE TABLE `inoculates`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `vaccine_batch` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '接种疫苗批次',
  `inoculate_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '接种疫苗名称',
  `resident_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '居民姓名',
  `inoculate_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '接种日期',
  `inoculatePoint_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '接种点地址',
  `inoculatePoint_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '接种地址',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of inoculates
-- ----------------------------
INSERT INTO `inoculates` VALUES (1, '2023100001', '灭活疫苗', '李南斯', '2023-5-1 00:00:00', '贵阳市南明区龙洞堡社区接种点', '贵阳市南明区龙洞堡社区', '2023-05-14 17:00:35', '2023-05-14 17:00:35');

-- ----------------------------
-- Table structure for residents
-- ----------------------------
DROP TABLE IF EXISTS `residents`;
CREATE TABLE `residents`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `resident_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '姓名',
  `resident_gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '性别',
  `resident_age` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '年龄',
  `resident_mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '手机号',
  `resident_numberId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '身份证号',
  `resident_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '居住地址',
  `resident_isInoculateFirst` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '是' COMMENT '是否接种第一针',
  `resident_isInoculateSecond` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '是' COMMENT '是否接种第二针',
  `resident_isInoculateThird` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '是' COMMENT '是否接种第三针或加强针',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `resident_mobile`(`resident_mobile` ASC) USING BTREE,
  UNIQUE INDEX `resident_numberId`(`resident_numberId` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of residents
-- ----------------------------

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '角色名称',
  `role_description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT '' COMMENT '角色描述',
  `role_state` tinyint(1) NULL DEFAULT 1 COMMENT '角色状态 0:不可用 1:可用',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10003 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (10001, '管理员用户', '具有居民管理、疫苗管理、接种管理、接种点等权限', 1, '2023-05-14 16:47:27', '2023-05-14 16:47:27');
INSERT INTO `roles` VALUES (10002, '普通用户', '具有疫苗管理、接种管理、接种点等查询权限', 1, '2023-05-14 16:47:49', '2023-05-14 16:47:49');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户名称，唯一',
  `user_password` char(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户密码',
  `user_mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户手机号(唯一)',
  `user_numberId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户身份证号(唯一)',
  `user_role` tinyint NOT NULL DEFAULT 1 COMMENT '用户角色 0：管理员，1：普通用户',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `user_name`(`user_name` ASC) USING BTREE,
  UNIQUE INDEX `user_mobile`(`user_mobile` ASC) USING BTREE,
  UNIQUE INDEX `user_numberId`(`user_numberId` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', '$2a$10$Kb4LHJbSupoJr5p/a8VTTe3XKIK19RA/Khd.EmcUechooqkZNMzoC', '15121514059', '522425199807039814', 0, '2023-05-14 16:20:42', '2023-05-14 16:20:42');
INSERT INTO `users` VALUES (2, 'lxm', '$2a$10$MKVZgImkeahnBCIJ603kI.oOM7SeX7N.1vKQSh4JXKecUZUUr46Kq', '15121514050', '522425199907039810', 1, '2023-05-14 17:01:24', '2023-05-14 17:01:24');

-- ----------------------------
-- Table structure for vaccines
-- ----------------------------
DROP TABLE IF EXISTS `vaccines`;
CREATE TABLE `vaccines`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `vaccine_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '疫苗名称',
  `vaccine_batch` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '疫苗批次',
  `vaccine_categroy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '疫苗种类',
  `vaccine_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '疫苗图片',
  `vaccine_manufacturer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '生产厂商',
  `vaccine_productDate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '生产日期',
  `vaccine_overdueDate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '过期日期',
  `vaccine_standard` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '注射规范',
  `vaccine_explain` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '注射说明',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of vaccines
-- ----------------------------
INSERT INTO `vaccines` VALUES (1, '灭活疫苗', '2023100001', '全病毒灭活疫苗', '', '贵阳疫苗生产基地', '2023-5-1', '2024-6-1', '注射规范', '注射说明', '2023-05-14 16:51:21', '2023-05-14 16:51:21');

-- ----------------------------
-- Table structure for vaccinetypes
-- ----------------------------
DROP TABLE IF EXISTS `vaccinetypes`;
CREATE TABLE `vaccinetypes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `vaccineType_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '分类名称',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of vaccinetypes
-- ----------------------------
INSERT INTO `vaccinetypes` VALUES (1, '全病毒灭活疫苗', '2023-05-14 16:36:18', '2023-05-14 16:36:18');
INSERT INTO `vaccinetypes` VALUES (2, '病毒载体疫苗', '2023-05-14 16:36:43', '2023-05-14 16:36:43');
INSERT INTO `vaccinetypes` VALUES (3, '蛋白亚单位疫苗', '2023-05-14 16:38:00', '2023-05-14 16:38:00');
INSERT INTO `vaccinetypes` VALUES (4, '核酸类疫苗', '2023-05-14 16:38:30', '2023-05-14 16:38:30');
INSERT INTO `vaccinetypes` VALUES (5, '病毒样颗粒疫苗', '2023-05-14 16:38:47', '2023-05-14 16:38:47');
INSERT INTO `vaccinetypes` VALUES (6, '减毒活疫苗', '2023-05-14 16:39:10', '2023-05-14 16:39:10');

SET FOREIGN_KEY_CHECKS = 1;
