import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * 创建边栏使您能够：
 * 创建有序的文档组
 * 为该组的每个文档呈现一个侧边栏
 * 提供下一个/上一个导航
 * <p>
 * 侧边栏可以从文件系统生成，也可以在此处显式定义。
 * 根据需要创建任意数量的侧边栏。
 */
const sidebars: SidebarsConfig = {
  weeklyId: [{type: 'autogenerated', dirName: 'weekly'}],
  dailyId: [{type: 'autogenerated', dirName: 'daily'}],
};

export default sidebars;
