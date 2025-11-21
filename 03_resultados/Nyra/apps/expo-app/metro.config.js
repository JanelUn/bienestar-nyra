// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

// eslint-disable-next-line no-undef
const currentDir = __dirname;
const projectRoot = currentDir;
const workspaceRoot = path.resolve(currentDir, '../..');

const config = getDefaultConfig(currentDir);

// Watch all files within the monorepo
config.watchFolders = [workspaceRoot];

// Let Metro know where to resolve packages
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Resolve @supabase/node-fetch to empty module for web
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === '@supabase/node-fetch' && platform === 'web') {
    return {
      type: 'empty',
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativeWind(config, {
  input: './app/global.css',
  projectRoot,
  inlineRem: false,
  features: {
    transformPercentagePolyfill: true,
  },
});
