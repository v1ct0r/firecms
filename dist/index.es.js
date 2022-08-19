import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateFnsUtils from '@date-io/date-fns';
import * as locales from 'date-fns/locale';
import * as React from 'react';
import React__default, { useState, useEffect, useRef, useCallback, useMemo, useContext, createElement, useLayoutEffect, lazy, Suspense } from 'react';
import { Snackbar, Alert, useMediaQuery, Tooltip, Skeleton, Box, Typography, Chip, IconButton, Table as Table$1, TableBody, TableRow, TableCell as TableCell$1, Link, CardMedia, Grid, List, ListItem, Paper, lighten, darken, Divider, TableContainer, FormControl, alpha as alpha$1, useTheme, Hidden, CircularProgress, Checkbox, TextareaAutosize, Select as Select$1, MenuItem, ListItemText, Input, Switch, TextField as TextField$1, Button, FormHelperText, InputLabel, FormControlLabel, FilledInput, InputAdornment, Container, ButtonGroup, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Popover, CardActionArea, CardContent, CardActions, OutlinedInput, Badge, Slide, AppBar, Toolbar, Breadcrumbs, Avatar, Drawer as Drawer$1, useForkRef, debounce, ownerWindow, Modal, Backdrop, Tabs, Tab, createTheme, Fade, CssBaseline, ThemeProvider } from '@mui/material';
import { jsxs, jsx, Fragment } from '@emotion/react/jsx-runtime';
import { useLocation, useNavigate, Link as Link$1, Route, Routes, NavLink, UNSAFE_NavigationContext, BrowserRouter } from 'react-router-dom';
import hash from 'object-hash';
import clsx from 'clsx';
import ErrorIcon from '@mui/icons-material/Error';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { makeStyles as makeStyles$1, createStyles as createStyles$1 } from '@mui/styles';
import InputBase from '@mui/material/InputBase';
import { alpha, darken as darken$1 } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { CheckBox, CheckBoxOutlineBlank, KeyboardTab, Add } from '@mui/icons-material';
import Upload from '@mui/icons-material/Upload';
import MarkdownPreview from '@uiw/react-markdown-preview';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import format from 'date-fns/format';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import BaseTable, { Column } from 'react-base-table';
import Measure from 'react-measure';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Tooltip$1 from '@mui/material/Tooltip/Tooltip';
import DateTimePicker from '@mui/lab/DateTimePicker';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Transition } from 'react-transition-group';
import CloseIcon from '@mui/icons-material/Close';
import Button$1 from '@mui/material/Button';
import Dialog$1 from '@mui/material/Dialog';
import DialogActions$1 from '@mui/material/DialogActions';
import DialogContent$1 from '@mui/material/DialogContent';
import DialogContentText$1 from '@mui/material/DialogContentText';
import DialogTitle$1 from '@mui/material/DialogTitle';
import { pink, red } from '@mui/material/colors';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import isEqual from 'react-fast-compare';
import * as yup from 'yup';
import EditIcon from '@mui/icons-material/Edit';
import { useDropzone } from 'react-dropzone';
import { Portal } from '@mui/base';
import { FieldArray, FastField, Field, getIn, useFormikContext, ErrorMessage, Formik, Form } from 'formik';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import ShortTextIcon from '@mui/icons-material/ShortText';
import SubjectIcon from '@mui/icons-material/Subject';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Crop75Icon from '@mui/icons-material/Crop75';
import ListIcon from '@mui/icons-material/List';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RoomIcon from '@mui/icons-material/Room';
import ViewListIcon from '@mui/icons-material/ViewList';
import LinkIcon from '@mui/icons-material/Link';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PhotoIcon from '@mui/icons-material/Photo';
import HttpIcon from '@mui/icons-material/Http';
import FlagIcon from '@mui/icons-material/Flag';
import AdjustIcon from '@mui/icons-material/Adjust';
import MDEditor from '@uiw/react-md-editor';
import { createElement as createElement$1 } from '@emotion/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, OAuthProvider, FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import { signInAnonymously, createUserWithEmailAndPassword } from '@firebase/auth';
import { getFirestore, query, getDocs, onSnapshot, getDoc, doc, collection, serverTimestamp, GeoPoint as GeoPoint$1, setDoc, deleteDoc, where, Timestamp, DocumentReference, orderBy, startAfter, limit } from 'firebase/firestore';
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const DEFAULT_STATE = {
  isOpen: false,
  close: () => {
  },
  open: (props) => {
  }
};
const SnackbarContext = React__default.createContext(DEFAULT_STATE);
const SnackbarProvider = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(void 0);
  const [message, setMessage] = useState(void 0);
  const [type, setType] = useState(void 0);
  const close = () => {
    setIsOpen(false);
    setTitle(void 0);
    setMessage(void 0);
    setType(void 0);
  };
  const open = (props) => {
    const {
      type: type2,
      message: message2,
      title: title2
    } = props;
    setType(type2);
    setMessage(message2);
    setTitle(title2);
    setIsOpen(true);
  };
  return /* @__PURE__ */ jsxs(SnackbarContext.Provider, {
    value: {
      isOpen,
      close,
      open
    },
    children: [children, /* @__PURE__ */ jsx(Snackbar, {
      open: isOpen,
      autoHideDuration: 3e3,
      onClose: (_) => close(),
      children: /* @__PURE__ */ jsxs(Alert, {
        elevation: 1,
        variant: "filled",
        onClose: (_) => close(),
        severity: type,
        children: [title && /* @__PURE__ */ jsx("div", {
          children: title
        }), message && /* @__PURE__ */ jsx("div", {
          children: message
        })]
      })
    })]
  });
};

const FireCMSContextInstance = React__default.createContext({
  sideEntityController: {},
  navigationContext: {},
  dataSource: {},
  storageSource: {},
  authController: {},
  snackbarController: {}
});
const FireCMSContextProvider = ({
  children,
  ...context
}) => {
  return /* @__PURE__ */ jsx(FireCMSContextInstance.Provider, {
    value: context,
    children
  });
};

const DEFAULT_BREADCRUMBS_CONTROLLER = {
  breadcrumbs: [],
  set: (props) => {
  }
};
const BreadcrumbContext = React__default.createContext(DEFAULT_BREADCRUMBS_CONTROLLER);
const BreadcrumbsProvider = ({
  children
}) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const set = (props) => {
    setBreadcrumbs(props.breadcrumbs);
  };
  return /* @__PURE__ */ jsx(BreadcrumbContext.Provider, {
    value: {
      breadcrumbs,
      set
    },
    children
  });
};

const DEFAULT_MODE_STATE = {
  mode: "light",
  setMode: (mode) => {
  },
  toggleMode: () => {
  }
};
const ModeStateContext = React__default.createContext(DEFAULT_MODE_STATE);
const ModeProvider = ({
  children
}) => {
  const prefersDarkModeQuery = useMediaQuery("(prefers-color-scheme: dark)");
  const prefersDarkModeStorage = localStorage.getItem("prefers-dark-mode") != null ? localStorage.getItem("prefers-dark-mode") === "true" : null;
  const prefersDarkMode = prefersDarkModeStorage ?? prefersDarkModeQuery;
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");
  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);
  const toggleMode = () => {
    if (mode === "light") {
      if (!prefersDarkModeQuery)
        localStorage.setItem("prefers-dark-mode", "true");
      else
        localStorage.removeItem("prefers-dark-mode");
      setMode("dark");
    } else {
      if (prefersDarkModeQuery)
        localStorage.setItem("prefers-dark-mode", "false");
      else
        localStorage.removeItem("prefers-dark-mode");
      setMode("light");
    }
  };
  return /* @__PURE__ */ jsx(ModeStateContext.Provider, {
    value: {
      mode,
      setMode,
      toggleMode
    },
    children
  });
};

function removeInitialAndTrailingSlashes(s) {
  return removeInitialSlash(removeTrailingSlash(s));
}
function removeInitialSlash(s) {
  if (s.startsWith("/"))
    return s.slice(1);
  else
    return s;
}
function removeTrailingSlash(s) {
  if (s.endsWith("/"))
    return s.slice(0, -1);
  else
    return s;
}
function getCollectionByPath(path, collections) {
  if (!collections)
    return void 0;
  const subpaths = removeInitialAndTrailingSlashes(path).split("/");
  if (subpaths.length % 2 === 0) {
    throw Error(`Collection paths must have an odd number of segments: ${path}`);
  }
  return getCollectionFromCollectionsInternal(removeInitialAndTrailingSlashes(path), collections);
}
function getCollectionFromCollectionsInternal(path, collectionViews) {
  const subpaths = removeInitialAndTrailingSlashes(path).split("/");
  const subpathCombinations = getCollectionPathsCombinations(subpaths);
  let result;
  for (let i = 0; i < subpathCombinations.length; i++) {
    const subpathCombination = subpathCombinations[i];
    const navigationEntry = collectionViews && collectionViews.find((entry) => entry.path === subpathCombination);
    if (navigationEntry) {
      if (subpathCombination === path) {
        result = navigationEntry;
      } else if (navigationEntry.subcollections) {
        const newPath = path.replace(subpathCombination, "").split("/").slice(2).join("/");
        if (newPath.length > 0)
          result = getCollectionFromCollectionsInternal(newPath, navigationEntry.subcollections);
      }
    }
    if (result)
      break;
  }
  return result;
}
function getCollectionPathsCombinations(subpaths) {
  const entries = subpaths.length > 0 && subpaths.length % 2 === 0 ? subpaths.splice(0, subpaths.length - 1) : subpaths;
  const length = entries.length;
  const result = [];
  for (let i = length; i > 0; i = i - 2) {
    result.push(entries.slice(0, i).join("/"));
  }
  return result;
}
function computeTopNavigation(navigationContext, includeHiddenViews) {
  const navigation = navigationContext.navigation;
  if (!navigation)
    throw Error("You can only use `computeTopNavigation` with an initialised navigationContext");
  const navigationEntries = [...navigation.collections.map((collection) => ({
    url: navigationContext.buildUrlCollectionPath(collection.path),
    name: collection.name,
    description: collection.description,
    group: collection.group
  })), ...(navigation.views ?? []).map((view) => includeHiddenViews || !view.hideFromNavigation ? {
    url: navigationContext.buildCMSUrlPath(Array.isArray(view.path) ? view.path[0] : view.path),
    name: view.name,
    description: view.description,
    group: view.group
  } : void 0).filter((view) => !!view)];
  const groups = Array.from(new Set(Object.values(navigationEntries).map((e) => e.group).filter(Boolean)).values());
  return {
    navigationEntries,
    groups
  };
}

function getNavigationEntriesFromPathInternal(props) {
  const {
    path,
    collections,
    currentFullPath
  } = props;
  const subpaths = removeInitialAndTrailingSlashes(path).split("/");
  const subpathCombinations = getCollectionPathsCombinations(subpaths);
  const result = [];
  for (let i = 0; i < subpathCombinations.length; i++) {
    const subpathCombination = subpathCombinations[i];
    const collection = collections && collections.find((entry) => entry.path === subpathCombination);
    if (collection) {
      const collectionPath = currentFullPath && currentFullPath.length > 0 ? currentFullPath + "/" + collection.path : collection.path;
      result.push({
        type: "collection",
        path: collectionPath,
        collection
      });
      const restOfThePath = removeInitialAndTrailingSlashes(removeInitialAndTrailingSlashes(path).replace(subpathCombination, ""));
      const nextSegments = restOfThePath.length > 0 ? restOfThePath.split("/") : [];
      if (nextSegments.length > 0) {
        const entityId = nextSegments[0];
        const fullPath = collectionPath + "/" + entityId;
        result.push({
          type: "entity",
          entityId,
          path: collectionPath,
          parentCollection: collection
        });
        if (nextSegments.length > 1) {
          const newPath = nextSegments.slice(1).join("/");
          const customViews = collection.schema.views;
          const customView = customViews && customViews.find((entry) => entry.path === newPath);
          if (customView) {
            const path2 = currentFullPath && currentFullPath.length > 0 ? currentFullPath + "/" + customView.path : customView.path;
            result.push({
              type: "custom_view",
              path: path2,
              view: customView
            });
          } else if (collection.subcollections) {
            result.push(...getNavigationEntriesFromPathInternal({
              path: newPath,
              customViews,
              collections: collection.subcollections,
              currentFullPath: fullPath
            }));
          }
        }
      }
      break;
    }
  }
  return result;
}

const NEW_URL_HASH = "new";
const useBuildSideEntityController = (navigationContext) => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialised = useRef(false);
  const [sidePanels, setSidePanels] = useState([]);
  const collections = navigationContext.navigation?.collections;
  const state = location.state;
  const baseLocation = state && state.base_location ? state.base_location : location;
  const updatePanels = useCallback((newPanels) => {
    setSidePanels(newPanels);
    navigationContext.removeAllOverridesExcept(newPanels);
  }, []);
  useEffect(() => {
    if (navigationContext.initialised) {
      if (location?.state && state.panels) {
        const statePanel = state.panels;
        updatePanels(statePanel);
      } else {
        updatePanels([]);
      }
    }
  }, [location?.state, navigationContext.initialised]);
  useEffect(() => {
    if (collections && !initialised.current) {
      if (navigationContext.isUrlCollectionPath(location.pathname)) {
        const newFlag = location.hash === `#${NEW_URL_HASH}`;
        const entityOrCollectionPath = navigationContext.urlPathToDataPath(location.pathname);
        const sidePanels2 = buildSidePanelsFromUrl(entityOrCollectionPath, collections, newFlag);
        updatePanels(sidePanels2);
      }
      initialised.current = true;
    }
  }, [location, collections, sidePanels]);
  const close = useCallback(() => {
    if (sidePanels.length === 0)
      return;
    const lastSidePanel = sidePanels[sidePanels.length - 1];
    const locationPanels = location?.state && state.panels;
    if (locationPanels && locationPanels.length > 0) {
      [...locationPanels.slice(0, -1)];
      navigate(-1);
    } else {
      const newPath = navigationContext.buildUrlCollectionPath(lastSidePanel.path);
      navigate(newPath, {
        replace: true
      });
    }
  }, [sidePanels, location]);
  const open = useCallback(({
    path,
    entityId,
    selectedSubpath,
    copy,
    width,
    ...schemaProps
  }) => {
    if (copy && !entityId) {
      throw Error("If you want to copy an entity you need to provide an entityId");
    }
    if (schemaProps && (schemaProps.schema !== void 0 || schemaProps.permissions !== void 0 || schemaProps.subcollections !== void 0)) {
      const permissions = schemaProps.permissions;
      const schemaOrResolver = schemaProps.schema;
      const subcollections = schemaProps.subcollections;
      const overrideSchemaRegistry = schemaProps.overrideSchemaRegistry;
      navigationContext.setOverride({
        path,
        entityId,
        schemaConfig: {
          permissions,
          schema: typeof schemaOrResolver !== "function" ? schemaOrResolver : void 0,
          schemaResolver: typeof schemaOrResolver === "function" ? schemaOrResolver : void 0,
          subcollections,
          callbacks: schemaProps.callbacks
        },
        overrideSchemaRegistry
      });
    }
    const cleanPath = removeInitialAndTrailingSlashes(path);
    const newPath = entityId ? navigationContext.buildUrlCollectionPath(`${cleanPath}/${entityId}/${selectedSubpath || ""}`) : navigationContext.buildUrlCollectionPath(`${cleanPath}#${NEW_URL_HASH}`);
    const lastSidePanel = sidePanels.length > 0 ? sidePanels[sidePanels.length - 1] : void 0;
    if (entityId && lastSidePanel && lastSidePanel.path === path && lastSidePanel?.entityId === entityId) {
      const updatedPanel = {
        ...lastSidePanel,
        selectedSubpath
      };
      const updatedPanels = [...sidePanels.slice(0, -1), updatedPanel];
      updatePanels(updatedPanels);
      navigate(navigationContext.buildUrlCollectionPath(`${cleanPath}/${entityId}/${selectedSubpath || ""}`), {
        replace: true,
        state: {
          base_location: baseLocation,
          panels: updatedPanels
        }
      });
    } else {
      const newPanel = {
        path,
        entityId,
        copy: copy !== void 0 && copy,
        width,
        selectedSubpath
      };
      const updatedPanels = [...sidePanels, newPanel];
      updatePanels(updatedPanels);
      navigate(newPath, {
        state: {
          base_location: baseLocation,
          panels: updatedPanels
        }
      });
    }
  }, [sidePanels, location]);
  return {
    sidePanels,
    close,
    open
  };
};
function buildSidePanelsFromUrl(path, collections, newFlag) {
  const navigationViewsForPath = getNavigationEntriesFromPathInternal({
    path,
    collections
  });
  const sidePanels = [];
  let lastCollectionPath = "";
  for (let i = 0; i < navigationViewsForPath.length; i++) {
    const navigationEntry = navigationViewsForPath[i];
    if (navigationEntry.type === "collection") {
      lastCollectionPath = navigationEntry.path;
    }
    if (i > 0) {
      const previousEntry = navigationViewsForPath[i - 1];
      if (navigationEntry.type === "entity") {
        if (previousEntry.type === "collection") {
          sidePanels.push({
            path: navigationEntry.path,
            entityId: navigationEntry.entityId,
            copy: false
          });
        }
      } else if (navigationEntry.type === "custom_view") {
        if (previousEntry.type === "entity") {
          const lastSidePanel = sidePanels[sidePanels.length - 1];
          if (lastSidePanel)
            lastSidePanel.selectedSubpath = navigationEntry.view.path;
        }
      } else if (navigationEntry.type === "collection") {
        if (previousEntry.type === "entity") {
          const lastSidePanel = sidePanels[sidePanels.length - 1];
          if (lastSidePanel)
            lastSidePanel.selectedSubpath = navigationEntry.collection.path;
        }
      }
    }
  }
  if (newFlag) {
    sidePanels.push({
      path: lastCollectionPath,
      copy: false
    });
  }
  return sidePanels;
}

class EntityReference {
  id;
  path;
  constructor(id, path) {
    this.id = id;
    this.path = path;
  }
  get pathWithId() {
    return `${this.path}/${this.id}`;
  }
}
class GeoPoint {
  latitude;
  longitude;
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

const pick = (obj, ...args) => ({
  ...args.reduce((res, key) => ({
    ...res,
    [key]: obj[key]
  }), {})
});
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function mergeDeep(target, source) {
  const output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, {
            [key]: source[key]
          });
        else
          output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, {
          [key]: source[key]
        });
      }
    });
  }
  return output;
}
function getValueInPath(o, path) {
  if (typeof o === "object") {
    if (path in o) {
      return o[path];
    }
    if (path.includes(".")) {
      const pathSegments = path.split(".");
      return getValueInPath(o[pathSegments[0]], pathSegments.slice(1).join("."));
    }
  }
  return void 0;
}
function getHashValue(v) {
  if (!v)
    return null;
  if (typeof v === "object") {
    if ("id" in v)
      return v.id;
    else if (v instanceof Date)
      return v.toLocaleString();
    else if (v instanceof GeoPoint)
      return hash(v);
  }
  return hash(v, {
    ignoreUnknown: true
  });
}

function buildPropertyFrom({
  propertyOrBuilder,
  values,
  previousValues,
  path,
  entityId,
  propertyOverride
}) {
  let result;
  if (typeof propertyOrBuilder === "function") {
    result = propertyOrBuilder({
      values,
      previousValues,
      entityId,
      path
    });
    if (!result) {
      console.debug("Property builder not returning `Property` so it is not rendered", path, entityId, propertyOrBuilder);
      return null;
    }
  } else {
    result = propertyOrBuilder;
  }
  if (propertyOverride)
    result = mergeDeep(result, propertyOverride);
  return result;
}

function isReadOnly(property) {
  if (property.readOnly)
    return true;
  if (property.dataType === "timestamp") {
    if (property.autoValue)
      return true;
  }
  if (property.dataType === "reference") {
    return !property.path;
  }
  return false;
}
function isHidden(property) {
  return typeof property.disabled === "object" && Boolean(property.disabled.hidden);
}
function computeSchema({
  schemaOrResolver,
  path,
  entityId,
  values,
  previousValues
}) {
  if (typeof schemaOrResolver === "function") {
    return schemaOrResolver({
      entityId,
      values,
      previousValues
    });
  } else {
    const properties = computeProperties({
      propertiesOrBuilder: schemaOrResolver.properties,
      path,
      entityId,
      values,
      previousValues
    });
    return {
      ...schemaOrResolver,
      properties,
      originalSchema: schemaOrResolver
    };
  }
}
function computeProperties({
  propertiesOrBuilder,
  path,
  entityId,
  values,
  previousValues
}) {
  return Object.entries(propertiesOrBuilder).map(([key, propertyOrBuilder]) => {
    const property = buildPropertyFrom({
      propertyOrBuilder,
      values: values ?? {},
      previousValues: previousValues ?? values ?? {},
      path,
      entityId
    });
    if (property === null)
      return null;
    return {
      [key]: property
    };
  }).filter((a) => a !== null).reduce((a, b) => ({
    ...a,
    ...b
  }), {});
}
function initWithProperties(properties, defaultValues) {
  return Object.entries(properties).map(([key, property]) => {
    const propertyDefaultValue = defaultValues && key in defaultValues ? defaultValues[key] : void 0;
    const value = initPropertyValue(key, property, propertyDefaultValue);
    return value === void 0 ? {} : {
      [key]: value
    };
  }).reduce((a, b) => ({
    ...a,
    ...b
  }), {});
}
function initPropertyValue(key, property, defaultValue) {
  let value;
  if (property.dataType === "map" && property.properties) {
    value = initWithProperties(property.properties, defaultValue);
  } else if (defaultValue !== void 0) {
    value = defaultValue;
  } else {
    value = void 0;
  }
  return value;
}
function updateAutoValues({
  inputValues,
  properties,
  status,
  timestampNowValue,
  referenceConverter,
  geopointConverter
}) {
  return traverseValues(inputValues, properties, (inputValue, property) => {
    if (property.dataType === "timestamp") {
      if (status === "existing" && property.autoValue === "on_update") {
        return timestampNowValue;
      } else if ((status === "new" || status === "copy") && (property.autoValue === "on_update" || property.autoValue === "on_create")) {
        return timestampNowValue;
      } else {
        return inputValue;
      }
    } else if (referenceConverter && property.dataType === "reference") {
      if (inputValue instanceof EntityReference) {
        return referenceConverter(inputValue);
      }
    } else if (geopointConverter && property.dataType === "geopoint") {
      if (inputValue instanceof GeoPoint) {
        return geopointConverter(inputValue);
      }
    } else {
      return inputValue;
    }
  });
}
function sanitizeData(values, properties) {
  const result = values;
  Object.entries(properties).forEach(([key, property]) => {
    if (values && values[key] !== void 0)
      result[key] = values[key];
    else if (property.validation?.required)
      result[key] = null;
  });
  return result;
}
function getReferenceFrom(entity) {
  return new EntityReference(entity.id, entity.path);
}
function traverseValues(inputValues, properties, operation) {
  const updatedValues = Object.entries(properties).map(([key, property]) => {
    const inputValue = inputValues && inputValues[key];
    const updatedValue = traverseValue(inputValue, property, operation);
    if (updatedValue === void 0)
      return {};
    return {
      [key]: updatedValue
    };
  }).reduce((a, b) => ({
    ...a,
    ...b
  }), {});
  return {
    ...inputValues,
    ...updatedValues
  };
}
function traverseValue(inputValue, property, operation) {
  let value;
  if (property.dataType === "map" && property.properties) {
    value = traverseValues(inputValue, property.properties, operation);
  } else if (property.dataType === "array") {
    if (property.of && Array.isArray(inputValue)) {
      value = inputValue.map((e) => traverseValue(e, property.of, operation));
    } else if (property.oneOf && Array.isArray(inputValue)) {
      const typeField = property.oneOf.typeField ?? "type";
      const valueField = property.oneOf.valueField ?? "value";
      value = inputValue.map((e) => {
        if (e === null)
          return null;
        if (typeof e !== "object")
          return e;
        const type = e[typeField];
        const childProperty = property.oneOf.properties[type];
        if (!type || !childProperty)
          return e;
        return {
          [typeField]: type,
          [valueField]: traverseValue(e[valueField], childProperty, operation)
        };
      });
    } else {
      value = inputValue;
    }
  } else {
    value = operation(inputValue, property);
  }
  return value;
}

function useBuildNavigationContext({
  basePath,
  baseCollectionPath,
  authController,
  navigationOrBuilder,
  schemaOverrideHandler,
  dateTimeFormat,
  locale,
  dataSource,
  storageSource,
  userConfigPersistence
}) {
  const [navigation, setNavigation] = useState(void 0);
  const [navigationLoading, setNavigationLoading] = useState(false);
  const [navigationLoadingError, setNavigationLoadingError] = useState(void 0);
  const schemaConfigRecord = useRef({});
  const cleanBasePath = removeInitialAndTrailingSlashes(basePath);
  const cleanBaseCollectionPath = removeInitialAndTrailingSlashes(baseCollectionPath);
  const homeUrl = cleanBasePath ? `/${cleanBasePath}` : "/";
  const fullCollectionPath = cleanBasePath ? `/${cleanBasePath}/${cleanBaseCollectionPath}` : `/${cleanBaseCollectionPath}`;
  const initialised = navigation?.collections !== void 0;
  useEffect(() => {
    if (!authController.canAccessMainView) {
      return;
    }
    setNavigationLoading(true);
    getNavigation({
      navigationOrCollections: navigationOrBuilder,
      user: authController.user,
      authController,
      dateTimeFormat,
      locale,
      dataSource,
      storageSource
    }).then((result) => {
      setNavigation(result);
      setNavigationLoading(false);
    }).catch(setNavigationLoadingError);
  }, [authController.user, authController.canAccessMainView, navigationOrBuilder, authController, dateTimeFormat, locale, dataSource, storageSource]);
  const getSchemaOverride = useCallback((path) => {
    if (!userConfigPersistence)
      return void 0;
    const collectionOverride = userConfigPersistence.getCollectionConfig(path);
    return collectionOverride?.schema;
  }, [userConfigPersistence]);
  const buildSchemaResolver = useCallback(({
    schema,
    path
  }) => ({
    entityId,
    values,
    previousValues
  }) => {
    const schemaOverride = getSchemaOverride(path);
    const storedProperties = getValueInPath(schemaOverride, "properties");
    const properties = computeProperties({
      propertiesOrBuilder: schema.properties,
      path,
      entityId,
      values: values ?? schema.defaultValues,
      previousValues
    });
    return {
      ...schema,
      properties: mergeDeep(properties, storedProperties),
      originalSchema: schema
    };
  }, [getSchemaOverride]);
  const getCollectionOverride = useCallback((path) => {
    if (!userConfigPersistence)
      return void 0;
    const dynamicCollectionConfig = {
      ...userConfigPersistence.getCollectionConfig(path)
    };
    delete dynamicCollectionConfig.schema;
    return dynamicCollectionConfig;
  }, [userConfigPersistence]);
  const getCollectionResolver = useCallback((path, entityId, collection) => {
    const collections = navigation?.collections;
    const baseCollection = collection ?? (collections && getCollectionByPath(removeInitialAndTrailingSlashes(path), collections));
    const collectionOverride = getCollectionOverride(path);
    const resolvedCollection = baseCollection ? mergeDeep(baseCollection, collectionOverride) : void 0;
    const sidePanelKey = getSidePanelKey(path, entityId);
    let result = {};
    const overriddenProps = schemaConfigRecord.current[sidePanelKey];
    const resolvedProps = schemaOverrideHandler && schemaOverrideHandler({
      entityId,
      path: removeInitialAndTrailingSlashes(path)
    });
    if (resolvedProps)
      result = resolvedProps;
    if (overriddenProps) {
      const shouldOverrideRegistry = overriddenProps.overrideSchemaRegistry === void 0 || overriddenProps.overrideSchemaRegistry;
      if (shouldOverrideRegistry)
        result = {
          ...overriddenProps,
          permissions: result.permissions || overriddenProps.permissions,
          schemaResolver: result.schemaResolver || overriddenProps.schemaResolver,
          subcollections: result.subcollections || overriddenProps.subcollections,
          callbacks: result.callbacks || overriddenProps.callbacks
        };
      else
        result = {
          ...result,
          permissions: overriddenProps.permissions ?? result.permissions,
          schemaResolver: overriddenProps.schemaResolver ?? result.schemaResolver,
          subcollections: overriddenProps.subcollections ?? result.subcollections,
          callbacks: overriddenProps.callbacks ?? result.callbacks
        };
    }
    if (resolvedCollection) {
      const schema = resolvedCollection.schema;
      const subcollections = resolvedCollection.subcollections;
      const callbacks = resolvedCollection.callbacks;
      const permissions = resolvedCollection.permissions;
      result = {
        ...result,
        schemaResolver: result.schemaResolver ?? buildSchemaResolver({
          schema,
          path
        }),
        subcollections: result.subcollections ?? subcollections,
        callbacks: result.callbacks ?? callbacks,
        permissions: result.permissions ?? permissions
      };
    }
    if (result && Object.keys(result).length) {
      if (!result.schemaResolver) {
        if (!result.schema)
          throw Error(`Not able to resolve schema for ${sidePanelKey}`);
        result.schemaResolver = buildSchemaResolver({
          schema: result.schema,
          path
        });
      }
    }
    return {
      ...resolvedCollection,
      ...result
    };
  }, [navigation?.collections, getCollectionOverride, schemaOverrideHandler, buildSchemaResolver]);
  const setOverride = useCallback(({
    path,
    entityId,
    schemaConfig,
    overrideSchemaRegistry
  }) => {
    const key = getSidePanelKey(path, entityId);
    if (!schemaConfig) {
      delete schemaConfigRecord.current[key];
      return void 0;
    } else {
      schemaConfigRecord.current[key] = {
        ...schemaConfig,
        overrideSchemaRegistry
      };
      return key;
    }
  }, []);
  const removeAllOverridesExcept = useCallback((entityRefs) => {
    const keys = entityRefs.map(({
      path,
      entityId
    }) => getSidePanelKey(path, entityId));
    Object.keys(schemaConfigRecord.current).forEach((currentKey) => {
      if (!keys.includes(currentKey))
        delete schemaConfigRecord.current[currentKey];
    });
  }, []);
  const isUrlCollectionPath = useCallback((path) => removeInitialAndTrailingSlashes(path + "/").startsWith(removeInitialAndTrailingSlashes(fullCollectionPath) + "/"), [fullCollectionPath]);
  const urlPathToDataPath = useCallback((path) => {
    if (path.startsWith(fullCollectionPath))
      return path.replace(fullCollectionPath, "");
    throw Error("Expected path starting with " + fullCollectionPath);
  }, [fullCollectionPath]);
  const buildUrlCollectionPath = useCallback((path) => `${baseCollectionPath}/${removeInitialAndTrailingSlashes(path)}`, [baseCollectionPath]);
  const buildCMSUrlPath = useCallback((path) => `/${removeInitialAndTrailingSlashes(path)}`, []);
  const onCollectionModifiedForUser = useCallback((path, partialCollection) => {
    if (userConfigPersistence) {
      const currentStoredConfig = userConfigPersistence.getCollectionConfig(path);
      userConfigPersistence.onCollectionModified(path, mergeDeep(currentStoredConfig, partialCollection));
    }
  }, [userConfigPersistence]);
  return {
    navigation,
    loading: navigationLoading,
    navigationLoadingError,
    homeUrl,
    basePath,
    baseCollectionPath,
    onCollectionModifiedForUser,
    initialised,
    getCollectionResolver,
    setOverride,
    removeAllOverridesExcept,
    isUrlCollectionPath,
    urlPathToDataPath,
    buildUrlCollectionPath,
    buildCMSUrlPath
  };
}
const getNavigation = async ({
  navigationOrCollections,
  user,
  authController,
  dateTimeFormat,
  locale,
  dataSource,
  storageSource
}) => {
  if (Array.isArray(navigationOrCollections)) {
    return {
      collections: navigationOrCollections
    };
  } else if (typeof navigationOrCollections === "function") {
    return navigationOrCollections({
      user,
      authController,
      dateTimeFormat,
      locale,
      dataSource,
      storageSource
    });
  } else {
    return navigationOrCollections;
  }
};
function getSidePanelKey(path, entityId) {
  if (entityId)
    return `${removeInitialAndTrailingSlashes(path)}/${removeInitialAndTrailingSlashes(entityId)}`;
  else
    return removeInitialAndTrailingSlashes(path);
}

function useBuildAuthController({
  authDelegate,
  authentication,
  dateTimeFormat,
  locale,
  dataSource,
  storageSource
}) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [notAllowedError, setNotAllowedError] = useState(false);
  const [extra, setExtra] = useState();
  const loginSkipped = authDelegate.loginSkipped;
  const authenticationEnabled = authentication === void 0 || !!authentication;
  const canAccessMainView = (!authenticationEnabled || Boolean(user) || Boolean(loginSkipped)) && !notAllowedError;
  const authController = useMemo(() => ({
    user,
    loginSkipped,
    canAccessMainView,
    initialLoading: authDelegate.initialLoading ?? false,
    authLoading,
    notAllowedError,
    signOut: authDelegate.signOut,
    extra,
    setExtra,
    authDelegate
  }), [authDelegate, authLoading, canAccessMainView, extra, loginSkipped, notAllowedError, user]);
  const checkAuthentication = useCallback(async () => {
    const delegateUser = authDelegate.user;
    if (authentication instanceof Function && delegateUser) {
      setAuthLoading(true);
      try {
        const allowed = await authentication({
          user: delegateUser,
          authController,
          dateTimeFormat,
          locale,
          dataSource,
          storageSource
        });
        if (allowed)
          setUser(delegateUser);
        else
          setNotAllowedError(true);
      } catch (e) {
        setNotAllowedError(e);
        authDelegate.signOut();
      }
      setAuthLoading(false);
    } else {
      setUser(delegateUser);
    }
  }, [authDelegate.user]);
  useEffect(() => {
    checkAuthentication();
  }, [authDelegate.user, checkAuthentication]);
  return authController;
}

function stripCollectionPath(path) {
  return path.split("/").filter((e, i) => i % 2 === 0).reduce((a, b) => `${a}/${b}`);
}
function useBuildStorageConfigurationPersistence() {
  function saveStorageCollectionConfig(path, data) {
    const storageKey = `collection_config_${stripCollectionPath(path)}`;
    localStorage.setItem(storageKey, JSON.stringify(data));
  }
  function getStorageCollectionConfig(path) {
    const storageKey = `collection_config_${stripCollectionPath(path)}`;
    const item = localStorage.getItem(storageKey);
    return item ? JSON.parse(item) : {};
  }
  return {
    onCollectionModified: saveStorageCollectionConfig,
    getCollectionConfig: getStorageCollectionConfig
  };
}

const DEFAULT_COLLECTION_PATH = "/c";
function FireCMS(props) {
  const {
    children,
    navigation: navigationOrBuilder,
    entityLinkBuilder,
    authentication,
    dateTimeFormat,
    locale,
    authDelegate,
    schemaOverrideHandler,
    storageSource,
    dataSource,
    basePath,
    baseCollectionPath
  } = props;
  const usedBasePath = basePath ?? "/";
  const usedBasedCollectionPath = baseCollectionPath ?? DEFAULT_COLLECTION_PATH;
  const dateUtilsLocale = locale ? locales[locale] : void 0;
  const authController = useBuildAuthController({
    authDelegate,
    authentication,
    dateTimeFormat,
    locale,
    dataSource,
    storageSource
  });
  const userConfigPersistence = useBuildStorageConfigurationPersistence();
  const navigationContext = useBuildNavigationContext({
    basePath: usedBasePath,
    baseCollectionPath: usedBasedCollectionPath,
    authController,
    navigationOrBuilder,
    dateTimeFormat,
    locale,
    dataSource,
    storageSource,
    schemaOverrideHandler,
    userConfigPersistence
  });
  const sideEntityController = useBuildSideEntityController(navigationContext);
  const loading = authController.authLoading || authController.initialLoading || navigationContext.loading;
  if (navigationContext.navigationLoadingError) {
    return /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("p", {
        children: "There was an error while loading your navigation config"
      }), /* @__PURE__ */ jsx("p", {
        children: navigationContext.navigationLoadingError
      })]
    });
  }
  return /* @__PURE__ */ jsx(ModeProvider, {
    children: /* @__PURE__ */ jsx(SnackbarProvider, {
      children: /* @__PURE__ */ jsx(SnackbarContext.Consumer, {
        children: (snackbarController) => {
          const context = {
            authController,
            sideEntityController,
            entityLinkBuilder,
            dateTimeFormat,
            locale,
            navigationContext,
            dataSource,
            storageSource,
            snackbarController
          };
          return /* @__PURE__ */ jsx(FireCMSContextProvider, {
            ...context,
            children: /* @__PURE__ */ jsx(BreadcrumbsProvider, {
              children: /* @__PURE__ */ jsx(LocalizationProvider, {
                dateAdapter: AdapterDateFns,
                utils: DateFnsUtils,
                locale: dateUtilsLocale,
                children: /* @__PURE__ */ jsx(ModeStateContext.Consumer, {
                  children: ({
                    mode
                  }) => {
                    return children({
                      context,
                      mode,
                      loading
                    });
                  }
                })
              })
            })
          });
        }
      })
    })
  });
}

const useStyles$v = makeStyles((theme) => createStyles({
  flexCenter: {
    display: "flex",
    alignItems: "center"
  },
  smallMargin: {
    margin: theme.spacing(1)
  },
  text: {
    paddingLeft: theme.spacing(2)
  }
}));
function ErrorView({
  error,
  tooltip
}) {
  const classes = useStyles$v();
  const body = /* @__PURE__ */ jsxs("div", {
    className: clsx(classes.flexCenter, classes.smallMargin),
    children: [/* @__PURE__ */ jsx(ErrorIcon, {
      fontSize: "small",
      color: "error"
    }), /* @__PURE__ */ jsx("div", {
      className: classes.text,
      children: error
    })]
  });
  if (tooltip) {
    return /* @__PURE__ */ jsx(Tooltip, {
      title: tooltip,
      children: body
    });
  }
  return body;
}

function AsyncPreviewComponentInternal({
  builder
}) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  useEffect(() => {
    let unmounted = false;
    builder.then((res) => {
      if (!unmounted) {
        setLoading(false);
        setResult(res);
      }
    }).catch((error) => {
      setLoading(false);
      console.error(error);
    });
    return () => {
      unmounted = true;
    };
  }, [builder]);
  if (loading)
    return /* @__PURE__ */ jsx(Skeleton, {
      variant: "text"
    });
  return /* @__PURE__ */ jsx(React.Fragment, {
    children: result
  });
}
const AsyncPreviewComponent = React.memo(AsyncPreviewComponentInternal);

class ErrorBoundary extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, errorInfo) {
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsxs(Box, {
        display: "flex",
        flexDirection: "column",
        m: 0.5,
        children: [/* @__PURE__ */ jsxs(Box, {
          display: "flex",
          alignItems: "center",
          m: 0.5,
          children: [/* @__PURE__ */ jsx(ErrorIcon, {
            color: "error",
            fontSize: "small"
          }), /* @__PURE__ */ jsx(Box, {
            marginLeft: 1,
            children: "Error"
          })]
        }), /* @__PURE__ */ jsx(Typography, {
          variant: "caption",
          children: "See the error in the console"
        })]
      });
    }
    return this.props.children;
  }
}

function hashString(str) {
  let hash = 0;
  let i;
  let chr;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return Math.abs(hash);
}

const CHIP_COLORS = {
  blueLighter: {
    color: "#cfdfff",
    text: "#102046"
  },
  cyanLighter: {
    color: "#d0f0fd",
    text: "#04283f"
  },
  tealLighter: {
    color: "#c2f5e9",
    text: "#012524"
  },
  greenLighter: {
    color: "#d1f7c4",
    text: "#0b1d05"
  },
  yellowLighter: {
    color: "#ffeab6",
    text: "#3b2501"
  },
  orangeLighter: {
    color: "#fee2d5",
    text: "#6b2613"
  },
  redLighter: {
    color: "#ffdce5",
    text: "#4c0c1c"
  },
  pinkLighter: {
    color: "#ffdaf6",
    text: "#400832"
  },
  purpleLighter: {
    color: "#ede2fe",
    text: "#280b42"
  },
  grayLighter: {
    color: "#eee",
    text: "#040404"
  },
  blueLight: {
    color: "#9cc7ff",
    text: "#102046"
  },
  cyanLight: {
    color: "#77d1f3",
    text: "#04283f"
  },
  tealLight: {
    color: "#72ddc3",
    text: "#012524"
  },
  greenLight: {
    color: "#93e088",
    text: "#0b1d05"
  },
  yellowLight: {
    color: "#ffd66e",
    text: "#3b2501"
  },
  orangeLight: {
    color: "#ffa981",
    text: "#6b2613"
  },
  redLight: {
    color: "#ff9eb7",
    text: "#4c0c1c"
  },
  pinkLight: {
    color: "#f99de2",
    text: "#400832"
  },
  purpleLight: {
    color: "#cdb0ff",
    text: "#280b42"
  },
  grayLight: {
    color: "#ccc",
    text: "#040404"
  },
  blueDark: {
    color: "#2d7ff9",
    text: "#fff"
  },
  cyanDark: {
    color: "#18bfff",
    text: "#fff"
  },
  tealDark: {
    color: "#20d9d2",
    text: "#fff"
  },
  greenDark: {
    color: "#20c933",
    text: "#fff"
  },
  yellowDark: {
    color: "#fcb400",
    text: "#fff"
  },
  orangeDark: {
    color: "#ff6f2c",
    text: "#fff"
  },
  redDark: {
    color: "#f82b60",
    text: "#fff"
  },
  pinkDark: {
    color: "#ff08c2",
    text: "#fff"
  },
  purpleDark: {
    color: "#8b46ff",
    text: "#fff"
  },
  grayDark: {
    color: "#666",
    text: "#fff"
  },
  blueDarker: {
    color: "#2750ae",
    text: "#cfdfff"
  },
  cyanDarker: {
    color: "#0b76b7",
    text: "#d0f0fd"
  },
  tealDarker: {
    color: "#06a09b",
    text: "#c2f5e9"
  },
  greenDarker: {
    color: "#338a17",
    text: "#d1f7c4"
  },
  yellowDarker: {
    color: "#b87503",
    text: "#ffeab6"
  },
  orangeDarker: {
    color: "#d74d26",
    text: "#fee2d5"
  },
  redDarker: {
    color: "#ba1e45",
    text: "#ffdce5"
  },
  pinkDarker: {
    color: "#b2158b",
    text: "#ffdaf6"
  },
  purpleDarker: {
    color: "#6b1cb0",
    text: "#ede2fe"
  },
  grayDarker: {
    color: "#444",
    text: "#eee"
  }
};
function getColorSchemeForSeed(seed) {
  const hash = hashString(seed);
  const colorKeys = Object.keys(CHIP_COLORS);
  const index = hash % colorKeys.length;
  return CHIP_COLORS[colorKeys[index]];
}
function getColorSchemeForKey(key) {
  return CHIP_COLORS[key];
}

function enumToObjectEntries(enumValues) {
  return enumValues instanceof Map ? Array.from(enumValues.entries()) : Object.entries(enumValues);
}
function getLabelOrConfigFrom(enumValues, key) {
  return enumValues instanceof Map ? enumValues.get(key) : enumValues[key];
}
function getColorSchemaKey(enumValues, key) {
  const labelOrConfig = getLabelOrConfigFrom(enumValues, key);
  if (typeof labelOrConfig === "object" && "color" in labelOrConfig) {
    return labelOrConfig.color;
  }
  return void 0;
}
function isEnumValueDisabled(labelOrConfig) {
  return typeof labelOrConfig === "object" && labelOrConfig.disabled;
}
function buildEnumLabel(labelOrConfig) {
  if (labelOrConfig === void 0)
    return void 0;
  if (typeof labelOrConfig === "object") {
    return labelOrConfig.label;
  } else {
    return labelOrConfig;
  }
}

const useStyles$u = makeStyles((theme) => createStyles({
  root: {
    maxWidth: "100%",
    backgroundColor: ({
      schema,
      error
    }) => error ? "#eee" : schema.color
  },
  label: {
    color: ({
      schema,
      error
    }) => error ? "red" : schema.text,
    fontWeight: theme.typography.fontWeightRegular
  }
}));
function EnumValuesChip({
  enumValues,
  enumKey,
  small
}) {
  const enumValue = enumKey !== void 0 ? getLabelOrConfigFrom(enumValues, enumKey.toString()) : void 0;
  const label = buildEnumLabel(enumValue);
  const colorSchemaKey = getColorSchemaKey(enumValues, enumKey.toString());
  return /* @__PURE__ */ jsx(CustomChip, {
    colorSeed: `${enumKey}`,
    colorSchemaKey,
    label: label !== void 0 ? label : enumKey,
    error: !label,
    outlined: false,
    small
  });
}
function CustomChip({
  colorSeed,
  label,
  colorSchemaKey,
  error,
  outlined,
  small
}) {
  const schema = useMemo(() => colorSchemaKey ? getColorSchemeForKey(colorSchemaKey) : getColorSchemeForSeed(colorSeed), [colorSeed, colorSchemaKey]);
  const classes = useStyles$u({
    schema,
    error
  });
  return /* @__PURE__ */ jsx(Chip, {
    classes: {
      root: classes.root,
      label: classes.label
    },
    size: small ? "small" : "medium",
    variant: outlined ? "outlined" : "filled",
    label
  });
}

function StringPreview({
  name,
  value,
  property,
  size
}) {
  if (property.config?.enumValues) {
    const enumKey = value;
    const enumValues = property.config.enumValues;
    return /* @__PURE__ */ jsx(EnumValuesChip, {
      enumKey,
      enumValues,
      small: size !== "regular"
    });
  } else if (property.config?.previewAsTag) {
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(CustomChip, {
        colorSeed: name ?? "",
        label: value,
        small: size !== "regular"
      })
    });
  } else {
    return /* @__PURE__ */ jsx(Fragment, {
      children: value && (value.includes("\n") ? value.split("\n").map((str, index) => /* @__PURE__ */ jsx("div", {
        children: str
      }, `string_preview_${index}`)) : value)
    });
  }
}

const useStyles$t = makeStyles((theme) => createStyles({
  array: {
    display: "flex",
    flexDirection: "column"
  },
  arrayWrap: {
    display: "flex",
    flexWrap: "wrap"
  },
  arrayItem: {
    margin: theme.spacing(0.5)
  }
}));
function ArrayOfStringsPreview({
  name,
  value,
  property,
  size
}) {
  const classes = useStyles$t();
  if (!property.of || property.dataType !== "array" || property.of.dataType !== "string")
    throw Error("Picked wrong preview component ArrayOfStringsPreview");
  if (value && !Array.isArray(value)) {
    return /* @__PURE__ */ jsx("div", {
      children: `Unexpected value: ${value}`
    });
  }
  const stringProperty = property.of;
  return /* @__PURE__ */ jsx("div", {
    className: classes.array,
    children: value && value.map((v, index) => /* @__PURE__ */ jsx("div", {
      className: classes.arrayItem,
      children: /* @__PURE__ */ jsx(ErrorBoundary, {
        children: /* @__PURE__ */ jsx(StringPreview, {
          name,
          property: stringProperty,
          value: v,
          size
        })
      })
    }, `preview_array_strings_${name}_${index}`))
  });
}

const useStyles$s = makeStyles((theme) => createStyles({
  arrayWrap: {
    display: "flex",
    flexWrap: "wrap"
  },
  arrayItem: {
    margin: theme.spacing(0.5)
  }
}));
function ArrayEnumPreview({
  name,
  value,
  enumValues,
  size
}) {
  const classes = useStyles$s();
  return /* @__PURE__ */ jsx("div", {
    className: classes.arrayWrap,
    children: value && value.map((enumKey, index) => {
      return /* @__PURE__ */ jsx("div", {
        className: classes.arrayItem,
        children: /* @__PURE__ */ jsx(ErrorBoundary, {
          children: /* @__PURE__ */ jsx(EnumValuesChip, {
            enumKey,
            enumValues,
            small: size !== "regular"
          })
        })
      }, `preview_array_ref_${name}_${index}`);
    })
  });
}

function ArrayPropertyEnumPreview({
  name,
  value,
  property,
  size
}) {
  if (property.dataType !== "array")
    throw Error("Picked wrong preview component ArrayEnumPreview");
  const ofProperty = property.of;
  if (!ofProperty.config?.enumValues)
    throw Error("Picked wrong preview component ArrayEnumPreview");
  if (!value)
    return null;
  const enumValues = ofProperty.config?.enumValues;
  return /* @__PURE__ */ jsx(ArrayEnumPreview, {
    name,
    value,
    enumValues,
    size
  });
}

function BooleanPreview({
  name,
  value,
  property,
  size
}) {
  return value ? /* @__PURE__ */ jsx(CheckBox, {
    color: "secondary"
  }) : /* @__PURE__ */ jsx(CheckBoxOutlineBlank, {
    color: "disabled"
  });
}

function Markdown({
  source
}) {
  return /* @__PURE__ */ jsx(MarkdownPreview, {
    source: typeof source === "string" ? source : "",
    style: {
      fontSize: "inherit",
      lineHeight: "inherit",
      fontFamily: "inherit"
    },
    components: {
      a: (props) => /* @__PURE__ */ jsx("a", {
        ...props,
        onClick: (e) => e.stopPropagation(),
        target: "_blank",
        children: props.children
      })
    }
  });
}

const useStyles$r = makeStyles((theme) => createStyles({
  root: {
    borderRadius: "9999px",
    backgroundColor: "rgba(128,128,128,0.1)",
    width: "18px",
    height: "6px",
    display: "inline-block"
  }
}));
function EmptyValue() {
  const classes = useStyles$r();
  return /* @__PURE__ */ jsx("div", {
    className: classes.root
  });
}

const TINY_THUMBNAIL = 40;
const SMALL_THUMBNAIL = 100;
const REGULAR_THUMBNAIL = 200;
function getThumbnailMeasure(size) {
  if (size === "tiny")
    return TINY_THUMBNAIL;
  else if (size === "small")
    return SMALL_THUMBNAIL;
  else if (size === "regular")
    return REGULAR_THUMBNAIL;
  else
    throw Error("Thumbnail size not mapped");
}
function getPreviewSizeFrom(size) {
  switch (size) {
    case "xs":
    case "s":
      return "tiny";
    case "m":
      return "small";
    case "l":
    case "xl":
      return "regular";
    default:
      throw Error("Missing mapping value in getPreviewSizeFrom");
  }
}

const useStyles$q = makeStyles((theme) => createStyles({
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "4px"
  },
  imageWrap: {
    position: "relative",
    maxWidth: "100%",
    maxHeight: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: ({
      imageSize
    }) => imageSize,
    height: ({
      imageSize
    }) => imageSize
  },
  imageTiny: {
    position: "relative",
    objectFit: "cover",
    width: ({
      imageSize
    }) => imageSize,
    height: ({
      imageSize
    }) => imageSize,
    borderRadius: "4px",
    maxHeight: "100%"
  },
  copyIcon: {
    borderRadius: "9999px",
    position: "absolute",
    bottom: -4,
    right: 32,
    backgroundColor: theme.palette.common.white
  },
  previewIcon: {
    borderRadius: "9999px",
    position: "absolute",
    bottom: -4,
    right: -4,
    backgroundColor: theme.palette.common.white
  }
}));
function ImagePreview({
  size,
  url
}) {
  const [onHover, setOnHover] = useState(false);
  const imageSize = useMemo(() => getThumbnailMeasure(size), [size]);
  const classes = useStyles$q({
    imageSize
  });
  if (size === "tiny") {
    return /* @__PURE__ */ jsx("img", {
      src: url,
      className: classes.imageTiny
    }, "tiny_image_preview_" + url);
  }
  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "4px"
  };
  return /* @__PURE__ */ jsxs("div", {
    className: classes.imageWrap,
    onMouseEnter: () => setOnHover(true),
    onMouseMove: () => setOnHover(true),
    onMouseLeave: () => setOnHover(false),
    children: [/* @__PURE__ */ jsx("img", {
      src: url,
      className: classes.image,
      style: imageStyle
    }), onHover && /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(Tooltip, {
        title: "Copy url to clipboard",
        children: /* @__PURE__ */ jsx("div", {
          className: classes.copyIcon,
          children: /* @__PURE__ */ jsx(IconButton, {
            size: "small",
            onClick: (e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(url);
            },
            children: /* @__PURE__ */ jsx(ContentPasteIcon, {
              htmlColor: "#666",
              fontSize: "small"
            })
          })
        })
      }), /* @__PURE__ */ jsx(Tooltip, {
        title: "Open image in new tab",
        children: /* @__PURE__ */ jsx("a", {
          className: classes.previewIcon,
          href: url,
          rel: "noopener noreferrer",
          target: "_blank",
          children: /* @__PURE__ */ jsx(IconButton, {
            size: "small",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsx(OpenInNewIcon, {
              htmlColor: "#666",
              fontSize: "small"
            })
          })
        })
      })]
    })]
  }, "image_preview_" + url);
}

function ArrayOfMapsPreview({
  name,
  value,
  property,
  size
}) {
  if (property.dataType !== "array" || !property.of || property.of.dataType !== "map")
    throw Error("Picked wrong preview component ArrayOfMapsPreview");
  const properties = property.of.properties;
  if (!properties) {
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${name}`);
  }
  const values = value;
  const previewProperties = property.of.previewProperties;
  if (!values)
    return null;
  let mapProperties = previewProperties;
  if (!mapProperties || !mapProperties.length) {
    mapProperties = Object.keys(properties);
    if (size)
      mapProperties = mapProperties.slice(0, 3);
  }
  return /* @__PURE__ */ jsx(Table$1, {
    size: "small",
    children: /* @__PURE__ */ jsx(TableBody, {
      children: values && values.map((v, index) => {
        return /* @__PURE__ */ jsx(TableRow, {
          sx: {
            "&:last-child th, &:last-child td": {
              borderBottom: 0
            }
          },
          children: mapProperties && mapProperties.map((key) => /* @__PURE__ */ jsx(TableCell$1, {
            component: "th",
            children: /* @__PURE__ */ jsx(ErrorBoundary, {
              children: /* @__PURE__ */ jsx(PreviewComponent, {
                name: key,
                value: v[key],
                property: properties[key],
                size: "small"
              })
            })
          }, `table-cell-${key}`))
        }, `table_${v}_${index}`);
      })
    })
  });
}

function NumberPreview({
  name,
  value,
  property,
  size
}) {
  if (property.config?.enumValues) {
    const enumKey = value;
    const enumValues = property.config.enumValues;
    return /* @__PURE__ */ jsx(EnumValuesChip, {
      enumKey,
      enumValues,
      small: size !== "regular"
    });
  } else {
    return /* @__PURE__ */ jsx(Fragment, {
      children: value
    });
  }
}

const defaultDateFormat = "MMMM dd, yyyy, HH:mm:ss";

const useFireCMSContext = () => useContext(FireCMSContextInstance);

function useDataSource() {
  const context = useFireCMSContext();
  return context.dataSource;
}

function useCollectionFetch({
  path,
  schemaResolver,
  filterValues,
  sortBy,
  itemCount,
  searchString,
  entitiesDisplayedFirst
}) {
  const sortByProperty = sortBy ? sortBy[0] : void 0;
  const currentSort = sortBy ? sortBy[1] : void 0;
  const dataSource = useDataSource();
  const initialEntities = useMemo(() => entitiesDisplayedFirst ? entitiesDisplayedFirst.filter((e) => !!e.values) : [], [entitiesDisplayedFirst]);
  const [data, setData] = useState(initialEntities);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataLoadingError, setDataLoadingError] = useState();
  const [noMoreToLoad, setNoMoreToLoad] = useState(false);
  const [entitiesLength, setEntitiesLength] = useState(0);
  const updateData = useCallback((entities) => {
    if (!initialEntities) {
      setData(entities);
    } else {
      const displayedFirstId = new Set(initialEntities.map((e) => e.id));
      setData([...initialEntities, ...entities.filter((e) => !displayedFirstId.has(e.id))]);
    }
  }, [initialEntities]);
  useEffect(() => {
    setDataLoading(true);
    const onEntitiesUpdate = (entities) => {
      setDataLoading(false);
      setDataLoadingError(void 0);
      updateData(entities);
      setEntitiesLength(entities.length);
      setNoMoreToLoad(!itemCount || entities.length < itemCount);
    };
    const onError = (error) => {
      console.error("ERROR", error);
      setDataLoading(false);
      setData([]);
      setDataLoadingError(error);
    };
    if (dataSource.listenCollection) {
      return dataSource.listenCollection({
        path,
        schema: schemaResolver,
        onUpdate: onEntitiesUpdate,
        onError,
        searchString,
        filter: filterValues,
        limit: itemCount,
        startAfter: void 0,
        orderBy: sortByProperty,
        order: currentSort
      });
    } else {
      dataSource.fetchCollection({
        path,
        schema: schemaResolver,
        searchString,
        filter: filterValues,
        limit: itemCount,
        startAfter: void 0,
        orderBy: sortByProperty,
        order: currentSort
      }).then(onEntitiesUpdate).catch(onError);
      return () => {
      };
    }
  }, [path, itemCount, currentSort, sortByProperty, filterValues, searchString]);
  return {
    data,
    dataLoading,
    dataLoadingError,
    noMoreToLoad,
    entitiesLength
  };
}

const CACHE = {};
function useEntityFetch({
  path,
  entityId,
  schema,
  useCache = false
}) {
  const dataSource = useDataSource();
  const [entity, setEntity] = useState();
  const [dataLoading, setDataLoading] = useState(true);
  const [dataLoadingError, setDataLoadingError] = useState();
  useEffect(() => {
    setDataLoading(true);
    const onEntityUpdate = (updatedEntity) => {
      CACHE[`${path}/${entityId}`] = updatedEntity;
      setEntity(updatedEntity);
      setDataLoading(false);
      setDataLoadingError(void 0);
    };
    const onError = (error) => {
      console.error("ERROR fetching entity", error);
      setDataLoading(false);
      setEntity(void 0);
      setDataLoadingError(error);
    };
    if (useCache && CACHE[`${path}/${entityId}`]) {
      setEntity(CACHE[`${path}/${entityId}`]);
      setDataLoading(false);
      setDataLoadingError(void 0);
      return () => {
      };
    } else if (entityId && path && schema) {
      if (dataSource.listenEntity) {
        return dataSource.listenEntity({
          path,
          entityId,
          schema,
          onUpdate: onEntityUpdate,
          onError
        });
      } else {
        dataSource.fetchEntity({
          path,
          entityId,
          schema
        }).then(onEntityUpdate).catch(onError);
        return () => {
        };
      }
    } else {
      onEntityUpdate(void 0);
      return () => {
      };
    }
  }, [entityId, path]);
  return {
    entity,
    dataLoading,
    dataLoadingError
  };
}

async function saveEntityWithCallbacks({
  schema,
  path,
  entityId,
  callbacks,
  values,
  previousValues,
  status,
  dataSource,
  context,
  onSaveSuccess,
  onSaveFailure,
  onPreSaveHookError,
  onSaveSuccessHookError
}) {
  let updatedValues;
  if (callbacks?.onPreSave) {
    try {
      const resolvedSchema = computeSchema({
        values: previousValues,
        entityId,
        schemaOrResolver: schema,
        path
      });
      updatedValues = await callbacks.onPreSave({
        schema: resolvedSchema,
        path,
        entityId,
        values,
        previousValues,
        status,
        context
      });
    } catch (e) {
      console.error(e);
      if (onPreSaveHookError)
        onPreSaveHookError(e);
      return;
    }
  } else {
    updatedValues = values;
  }
  return dataSource.saveEntity({
    schema,
    path,
    entityId,
    values: updatedValues,
    previousValues,
    status
  }).then((entity) => {
    try {
      if (callbacks?.onSaveSuccess) {
        const resolvedSchema = computeSchema({
          values: updatedValues,
          entityId,
          schemaOrResolver: schema,
          path
        });
        callbacks.onSaveSuccess({
          schema: resolvedSchema,
          path,
          entityId: entity.id,
          values: updatedValues,
          previousValues,
          status,
          context
        });
      }
    } catch (e) {
      if (onSaveSuccessHookError)
        onSaveSuccessHookError(e);
    }
    if (onSaveSuccess)
      onSaveSuccess(entity);
  }).catch((e) => {
    if (callbacks?.onSaveFailure) {
      const resolvedSchema = computeSchema({
        values: updatedValues,
        entityId,
        schemaOrResolver: schema,
        path
      });
      callbacks.onSaveFailure({
        schema: resolvedSchema,
        path,
        entityId,
        values: updatedValues,
        previousValues,
        status,
        context
      });
    }
    if (onSaveFailure)
      onSaveFailure(e);
  });
}

async function deleteEntityWithCallbacks({
  dataSource,
  entity,
  schema,
  callbacks,
  onDeleteSuccess,
  onDeleteFailure,
  onPreDeleteHookError,
  onDeleteSuccessHookError,
  context
}) {
  console.debug("Deleting entity", entity.path, entity.id);
  const entityDeleteProps = {
    entity,
    schema,
    entityId: entity.id,
    path: entity.path,
    context
  };
  if (callbacks?.onPreDelete) {
    try {
      await callbacks.onPreDelete(entityDeleteProps);
    } catch (e) {
      console.error(e);
      if (onPreDeleteHookError)
        onPreDeleteHookError(entity, e);
      return false;
    }
  }
  return dataSource.deleteEntity({
    entity
  }).then(() => {
    onDeleteSuccess && onDeleteSuccess(entity);
    try {
      if (callbacks?.onDelete) {
        callbacks.onDelete(entityDeleteProps);
      }
      return true;
    } catch (e) {
      if (onDeleteSuccessHookError)
        onDeleteSuccessHookError(entity, e);
      return false;
    }
  }).catch((e) => {
    if (onDeleteFailure)
      onDeleteFailure(entity, e);
    return false;
  });
}

function useClearRestoreValue({
  property,
  value,
  setValue
}) {
  const clearedValueRef = useRef(null);
  useEffect(() => {
    const shouldClearValueIfDisabled = typeof property.disabled === "object" && Boolean(property.disabled.clearOnDisabled);
    if (shouldClearValueIfDisabled) {
      if (value != null) {
        clearedValueRef.current = value;
        setValue(null);
      }
    } else if (clearedValueRef.current) {
      setValue(clearedValueRef.current);
      clearedValueRef.current = null;
    }
  }, [property]);
}

function useNavigation() {
  const context = useFireCMSContext();
  return context.navigationContext;
}

function resolveNavigationFrom({
  path,
  context
}) {
  const dataSource = context.dataSource;
  const navigationContext = context.navigationContext;
  const navigation = context.navigationContext.navigation;
  if (!navigation) {
    throw Error("Calling getNavigationFrom, but main navigation has not yet been initialised");
  }
  const navigationEntries = getNavigationEntriesFromPathInternal({
    path,
    collections: navigation.collections
  });
  const resultPromises = navigationEntries.map((entry) => {
    if (entry.type === "collection") {
      return Promise.resolve(entry);
    } else if (entry.type === "entity") {
      const entityCollectionResolver = navigationContext.getCollectionResolver(entry.path, entry.entityId);
      if (!entityCollectionResolver?.schemaResolver) {
        throw Error(`No schema defined in the navigation for the entity with path ${entry.path}`);
      }
      return dataSource.fetchEntity({
        path: entry.path,
        entityId: entry.entityId,
        schema: entityCollectionResolver?.schemaResolver
      }).then((entity) => {
        return {
          ...entry,
          entity
        };
      });
    } else if (entry.type === "custom_view") {
      return Promise.resolve(entry);
    } else {
      throw Error("Unmapped element in useEntitiesFromPath");
    }
  });
  return Promise.all(resultPromises);
}
function useResolvedNavigationFrom({
  path
}) {
  const context = useFireCMSContext();
  const [data, setData] = useState();
  const [dataLoading, setDataLoading] = useState(false);
  const [dataLoadingError, setDataLoadingError] = useState();
  useEffect(() => {
    const navigation = context.navigationContext.navigation;
    if (navigation) {
      setDataLoading(true);
      setDataLoadingError(void 0);
      resolveNavigationFrom({
        path,
        context
      }).then((res) => {
        setData(res);
      }).catch((e) => setDataLoadingError(e)).finally(() => setDataLoading(false));
    }
  }, [path, context]);
  if (!context.navigationContext.navigation) {
    return {
      dataLoading: true
    };
  }
  return {
    data,
    dataLoading,
    dataLoadingError
  };
}

function useStorageSource() {
  const context = useFireCMSContext();
  return context.storageSource;
}

function useAuthController() {
  const context = useFireCMSContext();
  return context.authController;
}

function useSideEntityController() {
  const context = useFireCMSContext();
  return context.sideEntityController;
}

const useSnackbarController = () => useContext(SnackbarContext);

const useModeState = () => useContext(ModeStateContext);

const useClipboard = (options) => {
  const {
    onSuccess,
    onError,
    disableClipboardAPI = false,
    copiedDuration
  } = options || {};
  const ref = useRef(null);
  const [isCoppied, setIsCoppied] = useState(false);
  const [clipboard, setClipbaord] = useState("");
  useEffect(() => {
    if (copiedDuration)
      setTimeout(() => setIsCoppied(false), copiedDuration);
  }, [isCoppied]);
  const isSupported = () => navigator.clipboard !== void 0;
  const handleError = useCallback((error) => {
    if (onError)
      onError(error);
    else
      throw new Error(error);
  }, [onError]);
  const handleSuccess = useCallback((text) => {
    if (onSuccess)
      onSuccess(text);
    setIsCoppied(true);
    setClipbaord(text);
  }, [onSuccess]);
  const copyToClipboard = useCallback((text) => {
    navigator.clipboard.writeText(text).then(() => handleSuccess(text)).catch((err) => {
      handleError(err);
      setIsCoppied(false);
    });
  }, [handleError, handleSuccess]);
  const clearClipboard = () => {
    if (isSupported()) {
      navigator.clipboard.writeText("");
    }
  };
  const copy = (text) => action("copy", typeof text === "object" ? void 0 : text);
  const cut = () => action("cut");
  const action = useCallback((operation = "copy", text) => {
    const element = ref.current;
    const isInput = element && (element.tagName === "INPUT" || element.tagName === "TEXTAREA");
    const input = ref.current;
    if (isSupported() && !disableClipboardAPI) {
      if (text) {
        copyToClipboard(text);
      } else if (element) {
        if (isInput) {
          copyToClipboard(input.value);
          if (operation === "cut") {
            input.value = "";
          }
        } else {
          copyToClipboard(element.innerText);
        }
      } else {
        handleError("Both the ref & text were undefined");
      }
    }
  }, [disableClipboardAPI, copyToClipboard, handleError]);
  return {
    ref,
    isCoppied,
    clipboard,
    clearClipboard,
    isSupported,
    copy,
    cut
  };
};

function TimestampPreview({
  name,
  value,
  property,
  size
}) {
  const appConfig = useFireCMSContext();
  const dateUtilsLocale = appConfig?.locale ? locales[appConfig?.locale] : void 0;
  const dateFormat = appConfig?.dateTimeFormat ?? defaultDateFormat;
  const formattedDate = value ? format(value, dateFormat, {
    locale: dateUtilsLocale
  }) : "";
  return /* @__PURE__ */ jsx(Fragment, {
    children: formattedDate
  });
}

const useStyles$p = makeStyles((theme) => createStyles({
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  smallMargin: {
    margin: theme.spacing(1)
  },
  arrayWrap: {
    display: "flex",
    flexWrap: "wrap"
  },
  array: {
    display: "flex",
    flexDirection: "column"
  },
  arrayItem: {
    margin: theme.spacing(0.5)
  },
  arrayItemBig: {
    margin: theme.spacing(1)
  },
  link: {
    display: "flex",
    wordBreak: "break-word",
    fontWeight: theme.typography.fontWeightMedium
  }
}));
function UrlComponentPreview({
  value,
  property,
  size
}) {
  const classes = useStyles$p();
  if (!value)
    return /* @__PURE__ */ jsx("div", {});
  const url = value;
  if (typeof property.config?.url === "boolean" && property.config.url) {
    return /* @__PURE__ */ jsxs(Link, {
      className: classes.link,
      href: url,
      onMouseDown: (e) => {
        e.preventDefault();
      },
      target: "_blank",
      children: [/* @__PURE__ */ jsx(OpenInNewIcon, {
        style: {
          marginRight: 8
        },
        fontSize: "small"
      }), url]
    });
  }
  const mediaType = property.config?.url || property.config?.storageMeta?.mediaType;
  if (mediaType === "image") {
    return /* @__PURE__ */ jsx(ImagePreview, {
      url,
      size
    }, `image_preview_${url}_${size}`);
  } else if (mediaType === "audio") {
    return /* @__PURE__ */ jsxs("audio", {
      controls: true,
      src: url,
      children: ["Your browser does not support the", /* @__PURE__ */ jsx("code", {
        children: "audio"
      }), " element."]
    }, `audio_preview_${url}_${size}`);
  } else if (mediaType === "video") {
    return /* @__PURE__ */ jsx(CardMedia, {
      style: {
        maxWidth: size === "small" ? 300 : 500
      },
      component: "video",
      controls: true,
      image: url
    }, `video_preview_${url}_${size}`);
  } else {
    return /* @__PURE__ */ jsx("a", {
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      onClick: (e) => e.stopPropagation(),
      children: /* @__PURE__ */ jsx("div", {
        className: classes.flexCenter,
        style: {
          width: getThumbnailMeasure(size),
          height: getThumbnailMeasure(size)
        },
        children: /* @__PURE__ */ jsx(DescriptionOutlinedIcon, {})
      })
    }, `link_preview_${url}_${size}`);
  }
}

function SkeletonComponent({
  property,
  size
}) {
  if (!property) {
    console.error("No property assigned for skeleton component", property, size);
  }
  let content;
  if (property.dataType === "string") {
    const stringProperty = property;
    if (stringProperty.config?.url) {
      content = renderUrlComponent(stringProperty, size);
    } else if (stringProperty.config?.storageMeta) {
      content = renderSkeletonImageThumbnail(size);
    } else {
      content = renderSkeletonText();
    }
  } else if (property.dataType === "array") {
    const arrayProperty = property;
    if (arrayProperty.of) {
      if (arrayProperty.of.dataType === "map" && arrayProperty.of.properties) {
        content = renderArrayOfMaps(arrayProperty.of.properties, size, arrayProperty.of.previewProperties);
      } else if (arrayProperty.of.dataType === "string") {
        if (arrayProperty.of.config?.enumValues) {
          content = renderArrayEnumTableCell();
        } else if (arrayProperty.of.config?.storageMeta) {
          content = renderGenericArrayCell(arrayProperty.of);
        } else {
          content = renderArrayOfStrings();
        }
      } else {
        content = renderGenericArrayCell(arrayProperty.of);
      }
    }
  } else if (property.dataType === "map") {
    content = renderMap(property, size);
  } else if (property.dataType === "timestamp") {
    content = renderSkeletonText();
  } else if (property.dataType === "reference") {
    content = renderReference();
  } else if (property.dataType === "boolean") {
    content = renderSkeletonText();
  } else {
    content = renderSkeletonText();
  }
  return content || null;
}
function renderMap(property, size) {
  if (!property.properties)
    return /* @__PURE__ */ jsx(Fragment, {});
  let mapProperties;
  if (!size) {
    mapProperties = Object.keys(property.properties);
  } else {
    if (property.previewProperties)
      mapProperties = property.previewProperties;
    else
      mapProperties = Object.keys(property.properties).slice(0, 3);
  }
  if (size)
    return /* @__PURE__ */ jsx(List, {
      children: mapProperties && mapProperties.map((key) => /* @__PURE__ */ jsx(ListItem, {
        children: /* @__PURE__ */ jsx(SkeletonComponent, {
          property: property.properties[key],
          size: "small"
        })
      }, property.title + key))
    });
  return /* @__PURE__ */ jsx(Table$1, {
    size: "small",
    children: /* @__PURE__ */ jsx(TableBody, {
      children: mapProperties && mapProperties.map((key, index) => {
        return /* @__PURE__ */ jsxs(TableRow, {
          sx: {
            "&:last-child th, &:last-child td": {
              borderBottom: 0
            }
          },
          children: [/* @__PURE__ */ jsx(TableCell$1, {
            component: "th",
            children: /* @__PURE__ */ jsx(Skeleton, {
              variant: "text"
            })
          }, `table-cell-title-${key}`), /* @__PURE__ */ jsx(TableCell$1, {
            component: "th",
            children: /* @__PURE__ */ jsx(SkeletonComponent, {
              property: property.properties[key],
              size: "small"
            })
          }, `table-cell-${key}`)]
        }, `table_${property.title}_${index}`);
      })
    })
  });
}
function renderArrayOfMaps(properties, size, previewProperties) {
  let tableProperties = previewProperties;
  if (!tableProperties || !tableProperties.length) {
    tableProperties = Object.keys(properties);
    if (size)
      tableProperties = tableProperties.slice(0, 3);
  }
  return /* @__PURE__ */ jsx(Table$1, {
    size: "small",
    children: /* @__PURE__ */ jsx(TableBody, {
      children: [0, 1, 2].map((value, index) => {
        return /* @__PURE__ */ jsx(TableRow, {
          children: tableProperties && tableProperties.map((key) => /* @__PURE__ */ jsx(TableCell$1, {
            component: "th",
            children: /* @__PURE__ */ jsx(SkeletonComponent, {
              property: properties[key],
              size: "small"
            })
          }, `table-cell-${key}`))
        }, `table_${value}_${index}`);
      })
    })
  });
}
function renderArrayOfStrings() {
  return /* @__PURE__ */ jsx(Grid, {
    children: [0, 1].map((value, index) => renderSkeletonText(index))
  });
}
function renderArrayEnumTableCell() {
  return /* @__PURE__ */ jsx(Grid, {
    children: [0, 1].map((value, index) => /* @__PURE__ */ jsx(Fragment, {
      children: renderSkeletonText(index)
    }))
  });
}
function renderGenericArrayCell(property) {
  return /* @__PURE__ */ jsx(Grid, {
    children: [0, 1].map((value, index) => /* @__PURE__ */ jsx(Fragment, {
      children: /* @__PURE__ */ jsx(SkeletonComponent, {
        property,
        size: "small"
      })
    }))
  });
}
function renderUrlAudioComponent() {
  return /* @__PURE__ */ jsx(Skeleton, {
    variant: "rectangular",
    width: 300,
    height: 100
  });
}
function renderSkeletonImageThumbnail(size) {
  const imageSize = size === "tiny" ? 40 : size === "small" ? 100 : 200;
  return /* @__PURE__ */ jsx(Skeleton, {
    variant: "rectangular",
    width: imageSize,
    height: imageSize
  });
}
function renderUrlVideo(size) {
  return /* @__PURE__ */ jsx(Skeleton, {
    variant: "rectangular",
    width: size !== "regular" ? 300 : 500,
    height: size !== "regular" ? 200 : 250
  });
}
function renderReference() {
  return /* @__PURE__ */ jsx(Skeleton, {
    variant: "rectangular",
    width: 200,
    height: 100
  });
}
function renderUrlComponent(property, size = "regular") {
  if (typeof property.config?.url === "boolean" && property.config.url) {
    return /* @__PURE__ */ jsxs("div", {
      style: {
        display: "flex"
      },
      children: [renderSkeletonIcon(), renderSkeletonText()]
    });
  }
  const mediaType = property.config?.url || property.config?.storageMeta?.mediaType;
  if (mediaType === "image") {
    return renderSkeletonImageThumbnail(size);
  } else if (mediaType === "audio") {
    return renderUrlAudioComponent();
  } else if (mediaType === "video") {
    return renderUrlVideo(size);
  } else {
    return renderUrlFile(size);
  }
}
function renderUrlFile(size) {
  return /* @__PURE__ */ jsx(Box, {
    sx: {
      width: getThumbnailMeasure(size),
      height: getThumbnailMeasure(size)
    },
    children: renderSkeletonIcon()
  });
}
function renderSkeletonText(index) {
  return /* @__PURE__ */ jsx(Skeleton, {
    variant: "text"
  }, `skeleton_${index}`);
}
function renderSkeletonIcon() {
  return /* @__PURE__ */ jsx(Skeleton, {
    variant: "rectangular",
    width: 24,
    height: 24
  });
}

const StorageThumbnail = React__default.memo(StorageThumbnailInternal, areEqual$4);
function areEqual$4(prevProps, nextProps) {
  return prevProps.name === nextProps.name && prevProps.size === nextProps.size && prevProps.height === nextProps.height && prevProps.width === nextProps.width && prevProps.value === nextProps.value;
}
const URL_CACHE = {};
function StorageThumbnailInternal({
  name,
  value,
  property,
  size
}) {
  const storage = useStorageSource();
  const storagePathOrDownloadUrl = value;
  const [url, setUrl] = React__default.useState(URL_CACHE[storagePathOrDownloadUrl]);
  useEffect(() => {
    if (!storagePathOrDownloadUrl)
      return;
    let unmounted = false;
    if (property.config?.storageMeta?.storeUrl) {
      setUrl(storagePathOrDownloadUrl);
      URL_CACHE[storagePathOrDownloadUrl] = storagePathOrDownloadUrl;
    } else if (storagePathOrDownloadUrl)
      storage.getDownloadURL(storagePathOrDownloadUrl).then(function(downloadURL) {
        if (!unmounted) {
          setUrl(downloadURL);
          URL_CACHE[storagePathOrDownloadUrl] = downloadURL;
        }
      });
    return () => {
      unmounted = true;
    };
  }, [property.config?.storageMeta?.storeUrl, storagePathOrDownloadUrl]);
  if (!storagePathOrDownloadUrl)
    return null;
  return url ? /* @__PURE__ */ jsx(UrlComponentPreview, {
    name,
    value: url,
    property,
    size
  }) : renderSkeletonImageThumbnail(size);
}

const useStyles$o = makeStyles((theme) => createStyles({
  arrayWrap: {
    display: "flex",
    flexWrap: "wrap"
  },
  arrayItem: {
    margin: theme.spacing(0.5)
  }
}));
function ArrayOfStorageComponentsPreview({
  name,
  value,
  property,
  size
}) {
  if (property.dataType !== "array" || !property.of || property.of.dataType !== "string")
    throw Error("Picked wrong preview component ArrayOfStorageComponentsPreview");
  const childSize = size === "regular" ? "small" : "tiny";
  const classes = useStyles$o();
  return /* @__PURE__ */ jsx("div", {
    className: classes.arrayWrap,
    children: value && value.map((v, index) => /* @__PURE__ */ jsx("div", {
      className: classes.arrayItem,
      children: /* @__PURE__ */ jsx(ErrorBoundary, {
        children: /* @__PURE__ */ jsx(PreviewComponent, {
          name,
          value: v,
          property: property.of,
          size: childSize
        })
      })
    }, `preview_array_storage_${name}_${index}`))
  });
}

const ReferencePreview = React.memo(ReferencePreviewComponent, areEqual$3);
function areEqual$3(prevProps, nextProps) {
  return prevProps.name === nextProps.name && prevProps.size === nextProps.size && prevProps.height === nextProps.height && prevProps.width === nextProps.width && prevProps.onHover === nextProps.onHover && prevProps.value?.id === nextProps.value?.id && prevProps.value?.path === nextProps.value?.path;
}
function ReferencePreviewComponent({
  value,
  property,
  onClick,
  size,
  onHover
}) {
  if (typeof property.path !== "string") {
    throw Error("Picked the wrong component ReferencePreviewComponent");
  }
  const reference = value;
  const previewProperties = property.previewProperties;
  const navigationContext = useNavigation();
  const sideEntityController = useSideEntityController();
  const collectionResolver = navigationContext.getCollectionResolver(property.path);
  if (!collectionResolver) {
    throw Error(`Couldn't find the corresponding collection view for the path: ${property.path}`);
  }
  const schema = collectionResolver.schema;
  const {
    entity,
    dataLoading,
    dataLoadingError
  } = useEntityFetch({
    path: reference.path,
    entityId: reference.id,
    schema: collectionResolver.schemaResolver,
    useCache: true
  });
  const listProperties = useMemo(() => {
    let res = previewProperties;
    if (!res || !res.length) {
      res = Object.keys(schema.properties);
    }
    if (size === "small" || size === "regular")
      res = res.slice(0, 3);
    else if (size === "tiny")
      res = res.slice(0, 1);
    return res;
  }, [previewProperties, schema.properties, size]);
  let body;
  function buildError(error, tooltip) {
    return /* @__PURE__ */ jsx(ErrorView, {
      error,
      tooltip
    });
  }
  if (!value) {
    body = buildError("Reference not set");
  } else if (!(value instanceof EntityReference)) {
    body = buildError("Unexpected value", JSON.stringify(value));
  } else if (entity && !entity.values) {
    body = buildError("Reference does not exist", reference.path);
  } else {
    body = /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          maxWidth: "calc(100% - 60px)",
          margin: 1
        },
        children: [size !== "tiny" && (value ? /* @__PURE__ */ jsx(Box, {
          sx: {
            display: size !== "regular" ? "block" : void 0,
            whiteSpace: size !== "regular" ? "nowrap" : void 0,
            overflow: size !== "regular" ? "hidden" : void 0,
            textOverflow: size !== "regular" ? "ellipsis" : void 0
          },
          children: /* @__PURE__ */ jsx(Typography, {
            variant: "caption",
            className: "mono",
            children: value.id
          })
        }) : /* @__PURE__ */ jsx(Skeleton, {
          variant: "text"
        })), listProperties && listProperties.map((key) => {
          const childProperty = schema.properties[key];
          if (!childProperty)
            return null;
          return /* @__PURE__ */ jsx("div", {
            children: entity ? /* @__PURE__ */ jsx(PreviewComponent, {
              name: key,
              value: entity.values[key],
              property: childProperty,
              size: "tiny"
            }) : /* @__PURE__ */ jsx(SkeletonComponent, {
              property: childProperty,
              size: "tiny"
            })
          }, "ref_prev_" + key);
        })]
      }), /* @__PURE__ */ jsx(Box, {
        sx: {
          margin: "auto"
        },
        children: entity && /* @__PURE__ */ jsx(Tooltip, {
          title: `See details for ${entity.id}`,
          children: /* @__PURE__ */ jsx(IconButton, {
            size: size === "tiny" ? "small" : "medium",
            onClick: (e) => {
              e.stopPropagation();
              sideEntityController.open({
                entityId: entity.id,
                path: entity.path,
                schema,
                overrideSchemaRegistry: false
              });
            },
            children: /* @__PURE__ */ jsx(KeyboardTabIcon, {
              fontSize: "small"
            })
          })
        })
      })]
    });
  }
  return /* @__PURE__ */ jsx(Paper, {
    elevation: 0,
    sx: (theme) => {
      const clickableStyles = onClick ? {
        tabindex: 0,
        backgroundColor: onHover ? theme.palette.mode === "dark" ? lighten(theme.palette.background.default, 0.1) : darken(theme.palette.background.default, 0.15) : darken(theme.palette.background.default, 0.1),
        transition: "background-color 300ms ease, box-shadow 300ms ease",
        boxShadow: onHover ? "0 0 0 2px rgba(128,128,128,0.05)" : void 0,
        cursor: onHover ? "pointer" : void 0
      } : {};
      return {
        width: "100%",
        display: "flex",
        color: "#838383",
        backgroundColor: darken(theme.palette.background.default, 0.1),
        borderRadius: "2px",
        overflow: "hidden",
        padding: size === "regular" ? 1 : 0,
        itemsAlign: size === "tiny" ? "center" : void 0,
        fontWeight: theme.typography.fontWeightMedium,
        ...clickableStyles
      };
    },
    onClick,
    children: body
  });
}

const useStyles$n = makeStyles((theme) => createStyles({
  arrayItem: {
    margin: theme.spacing(0.5)
  }
}));
function ArrayOfReferencesPreview({
  name,
  value,
  property,
  size
}) {
  if (property.dataType !== "array" || !property.of || property.of.dataType !== "reference")
    throw Error("Picked wrong preview component ArrayOfReferencesPreview");
  const classes = useStyles$n();
  const childSize = size === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ jsx(Fragment, {
    children: value && value.map((v, index) => /* @__PURE__ */ jsx("div", {
      className: classes.arrayItem,
      children: /* @__PURE__ */ jsx(ReferencePreview, {
        name: `${name}[${index}]`,
        size: childSize,
        value: v,
        property: property.of
      })
    }, `preview_array_ref_${name}_${index}`))
  });
}

const useStyles$m = makeStyles(() => createStyles({
  tableNoBottomBorder: {
    "&:last-child th, &:last-child td": {
      borderBottom: 0
    }
  },
  verticalAlignTop: {
    verticalAlign: "top"
  }
}));
function MapPreview({
  name,
  value,
  property,
  size
}) {
  const classes = useStyles$m();
  if (property.dataType !== "map") {
    throw Error("Picked wrong preview component MapPreview");
  }
  const mapProperty = property;
  if (!mapProperty.properties) {
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${name}`);
  }
  if (!value)
    return null;
  let mapPropertyKeys;
  if (size === "regular") {
    mapPropertyKeys = Object.keys(mapProperty.properties);
  } else {
    mapPropertyKeys = mapProperty.previewProperties || Object.keys(mapProperty.properties);
    if (size === "small")
      mapPropertyKeys = mapPropertyKeys.slice(0, 3);
    else if (size === "tiny")
      mapPropertyKeys = mapPropertyKeys.slice(0, 1);
  }
  if (size !== "regular")
    return /* @__PURE__ */ jsx(Fragment, {
      children: mapPropertyKeys.map((key, index) => /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx(ErrorBoundary, {
          children: /* @__PURE__ */ jsx(PreviewComponent, {
            name: key,
            value: value[key],
            property: mapProperty.properties[key],
            size
          })
        })
      }, "map_preview_" + mapProperty.title + key + index))
    });
  return /* @__PURE__ */ jsx(Table$1, {
    size: "small",
    children: /* @__PURE__ */ jsx(TableBody, {
      children: mapPropertyKeys && mapPropertyKeys.map((key, index) => {
        return /* @__PURE__ */ jsxs(TableRow, {
          className: classes.tableNoBottomBorder,
          children: [/* @__PURE__ */ jsx(TableCell$1, {
            className: classes.verticalAlignTop,
            width: "30%",
            component: "th",
            children: /* @__PURE__ */ jsx(Typography, {
              variant: "caption",
              color: "textSecondary",
              children: mapProperty.properties[key].title
            })
          }, `table-cell-title-${name}-${key}`), /* @__PURE__ */ jsx(TableCell$1, {
            width: "70%",
            className: classes.verticalAlignTop,
            component: "th",
            children: /* @__PURE__ */ jsx(ErrorBoundary, {
              children: /* @__PURE__ */ jsx(PreviewComponent, {
                name: key,
                value: value[key],
                property: mapProperty.properties[key],
                size: "small"
              })
            })
          }, `table-cell-${name}-${key}`)]
        }, `map_preview_table_${name}_${index}`);
      })
    })
  }, `map_preview_${name}`);
}

const useStyles$l = makeStyles((theme) => createStyles({
  array: {
    display: "flex",
    flexDirection: "column"
  },
  arrayItemBig: {
    margin: theme.spacing(1)
  }
}));
function ArrayPreview({
  name,
  value,
  property,
  size
}) {
  if (!property.of) {
    throw Error(`You need to specify an 'of' prop (or specify a custom field) in your array property ${name}`);
  }
  const classes = useStyles$l();
  if (property.dataType !== "array")
    throw Error("Picked wrong preview component ArrayPreview");
  const values = value;
  if (!values)
    return null;
  const childSize = size === "regular" ? "small" : "tiny";
  return /* @__PURE__ */ jsx("div", {
    className: classes.array,
    children: values && values.map((value2, index) => /* @__PURE__ */ jsxs(React__default.Fragment, {
      children: [/* @__PURE__ */ jsx("div", {
        className: classes.arrayItemBig,
        children: /* @__PURE__ */ jsx(ErrorBoundary, {
          children: /* @__PURE__ */ jsx(PreviewComponent, {
            name,
            value: value2,
            property: property.of,
            size: childSize
          })
        })
      }), index < values.length - 1 && /* @__PURE__ */ jsx(Divider, {})]
    }, "preview_array_" + value2 + "_" + index))
  });
}

const useStyles$k = makeStyles((theme) => createStyles({
  array: {
    display: "flex",
    flexDirection: "column"
  },
  arrayWrap: {
    display: "flex",
    flexWrap: "wrap"
  },
  arrayItemBig: {
    margin: theme.spacing(1)
  }
}));
function ArrayOneOfPreview({
  name,
  value,
  property,
  size
}) {
  if (property.dataType !== "array")
    throw Error("Picked wrong preview component ArrayPreview");
  if (!property.oneOf) {
    throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${name}`);
  }
  const classes = useStyles$k();
  const values = value;
  if (!values)
    return null;
  const childSize = size === "regular" ? "small" : "tiny";
  const typeField = property.oneOf.typeField ?? "type";
  const valueField = property.oneOf.valueField ?? "value";
  const properties = property.oneOf.properties;
  return /* @__PURE__ */ jsx("div", {
    className: classes.array,
    children: values && values.map((value2, index) => /* @__PURE__ */ jsxs(React__default.Fragment, {
      children: [/* @__PURE__ */ jsx("div", {
        className: classes.arrayItemBig,
        children: /* @__PURE__ */ jsx(ErrorBoundary, {
          children: value2 && /* @__PURE__ */ jsx(PreviewComponent, {
            name,
            value: value2[valueField],
            property: properties[value2[typeField]],
            size: childSize
          })
        })
      }), index < values.length - 1 && /* @__PURE__ */ jsx(Divider, {})]
    }, "preview_array_" + value2 + "_" + index))
  });
}

function PreviewComponent(props) {
  let content;
  const {
    property,
    name,
    value,
    size,
    height,
    width
  } = props;
  const fieldProps = {
    ...props
  };
  if (value === void 0) {
    content = /* @__PURE__ */ jsx(EmptyValue, {});
  } else if (property.config?.Preview) {
    content = createElement(property.config.Preview, {
      name,
      value,
      property,
      size,
      height,
      width,
      customProps: property.config.customProps
    });
  } else if (value === null) {
    content = /* @__PURE__ */ jsx(EmptyValue, {});
  } else if (property.dataType === "string") {
    const stringProperty = property;
    if (typeof value === "string") {
      if (stringProperty.config?.url) {
        content = /* @__PURE__ */ jsx(UrlComponentPreview, {
          ...fieldProps,
          property,
          value
        });
      } else if (stringProperty.config?.storageMeta) {
        content = /* @__PURE__ */ jsx(StorageThumbnail, {
          ...fieldProps,
          property,
          value
        });
      } else if (stringProperty.config?.markdown) {
        content = /* @__PURE__ */ jsx(Markdown, {
          source: value
        });
      } else {
        content = /* @__PURE__ */ jsx(StringPreview, {
          ...fieldProps,
          property,
          value
        });
      }
    } else {
      content = buildWrongValueType(name, property.dataType, value);
    }
  } else if (property.dataType === "array") {
    if (value instanceof Array) {
      const arrayProperty = property;
      if (!arrayProperty.of && !arrayProperty.oneOf) {
        throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${name}`);
      }
      if (arrayProperty.of) {
        if (arrayProperty.of.dataType === "map") {
          content = /* @__PURE__ */ jsx(ArrayOfMapsPreview, {
            name,
            property,
            value,
            size
          });
        } else if (arrayProperty.of.dataType === "reference") {
          if (typeof arrayProperty.of.path === "string") {
            content = /* @__PURE__ */ jsx(ArrayOfReferencesPreview, {
              ...fieldProps,
              value,
              property
            });
          } else {
            content = /* @__PURE__ */ jsx(EmptyValue, {});
          }
        } else if (arrayProperty.of.dataType === "string") {
          if (arrayProperty.of.config?.enumValues) {
            content = /* @__PURE__ */ jsx(ArrayPropertyEnumPreview, {
              ...fieldProps,
              value,
              property
            });
          } else if (arrayProperty.of.config?.storageMeta) {
            content = /* @__PURE__ */ jsx(ArrayOfStorageComponentsPreview, {
              ...fieldProps,
              value,
              property
            });
          } else {
            content = /* @__PURE__ */ jsx(ArrayOfStringsPreview, {
              ...fieldProps,
              value,
              property
            });
          }
        } else if (arrayProperty.of.dataType === "number") {
          if (arrayProperty.of.config?.enumValues) {
            content = /* @__PURE__ */ jsx(ArrayPropertyEnumPreview, {
              ...fieldProps,
              value,
              property
            });
          }
        } else {
          content = /* @__PURE__ */ jsx(ArrayPreview, {
            ...fieldProps,
            value,
            property
          });
        }
      } else if (arrayProperty.oneOf) {
        content = /* @__PURE__ */ jsx(ArrayOneOfPreview, {
          ...fieldProps,
          value,
          property
        });
      }
    } else {
      content = buildWrongValueType(name, property.dataType, value);
    }
  } else if (property.dataType === "map") {
    if (typeof value === "object") {
      content = /* @__PURE__ */ jsx(MapPreview, {
        ...fieldProps,
        property
      });
    } else {
      content = buildWrongValueType(name, property.dataType, value);
    }
  } else if (property.dataType === "timestamp") {
    if (value instanceof Date) {
      content = /* @__PURE__ */ jsx(TimestampPreview, {
        ...fieldProps,
        value,
        property
      });
    } else {
      content = buildWrongValueType(name, property.dataType, value);
    }
  } else if (property.dataType === "reference") {
    if (typeof property.path === "string") {
      if (value instanceof EntityReference) {
        content = /* @__PURE__ */ jsx(ReferencePreview, {
          ...fieldProps,
          value,
          property
        });
      } else {
        content = buildWrongValueType(name, property.dataType, value);
      }
    } else {
      content = /* @__PURE__ */ jsx(EmptyValue, {});
    }
  } else if (property.dataType === "boolean") {
    if (typeof value === "boolean") {
      content = /* @__PURE__ */ jsx(BooleanPreview, {
        ...fieldProps,
        value,
        property
      });
    } else {
      content = buildWrongValueType(name, property.dataType, value);
    }
  } else if (property.dataType === "number") {
    if (typeof value === "number") {
      content = /* @__PURE__ */ jsx(NumberPreview, {
        ...fieldProps,
        value,
        property
      });
    } else {
      content = buildWrongValueType(name, property.dataType, value);
    }
  } else {
    content = JSON.stringify(value);
  }
  return content === void 0 || content === null ? /* @__PURE__ */ jsx(EmptyValue, {}) : content;
}
function buildWrongValueType(name, dataType, value) {
  console.error(`Unexpected value for property ${name}, of type ${dataType}`, value);
  return /* @__PURE__ */ jsx(ErrorView, {
    error: `Unexpected value: ${JSON.stringify(value)}`
  });
}

function getIdIcon(color = "inherit", fontSize = "inherit") {
  return /* @__PURE__ */ jsx(AdjustIcon, {
    color,
    fontSize
  });
}
function getIconForProperty(property, color = "inherit", fontSize = "inherit") {
  if (property.dataType === "string") {
    if (property.config?.multiline || property.config?.markdown) {
      return /* @__PURE__ */ jsx(SubjectIcon, {
        color,
        fontSize
      });
    } else if (property.config?.storageMeta) {
      if (property.config.storageMeta.mediaType === "image")
        return /* @__PURE__ */ jsx(PhotoIcon, {
          color,
          fontSize
        });
      return /* @__PURE__ */ jsx(AttachmentIcon, {
        color,
        fontSize
      });
    } else if (property.config?.url) {
      return /* @__PURE__ */ jsx(HttpIcon, {
        color,
        fontSize
      });
    } else if (property.config?.enumValues) {
      return /* @__PURE__ */ jsx(ListIcon, {
        color,
        fontSize
      });
    } else {
      return /* @__PURE__ */ jsx(ShortTextIcon, {
        color,
        fontSize
      });
    }
  } else if (property.dataType === "number") {
    return /* @__PURE__ */ jsx(EqualizerIcon, {
      color,
      fontSize
    });
  } else if (property.dataType === "geopoint") {
    return /* @__PURE__ */ jsx(RoomIcon, {
      color,
      fontSize
    });
  } else if (property.dataType === "map") {
    if (property.properties)
      return /* @__PURE__ */ jsx(ViewListIcon, {
        color,
        fontSize
      });
    else
      return /* @__PURE__ */ jsx(ListAltIcon, {
        color,
        fontSize
      });
  } else if (property.dataType === "array") {
    if (property.of)
      return getIconForProperty(property.of, color, fontSize);
    else
      return /* @__PURE__ */ jsx(ListAltIcon, {
        color,
        fontSize
      });
  } else if (property.dataType === "boolean") {
    return /* @__PURE__ */ jsx(FlagIcon, {
      color,
      fontSize
    });
  } else if (property.dataType === "timestamp") {
    return /* @__PURE__ */ jsx(ScheduleIcon, {
      color,
      fontSize
    });
  } else if (property.dataType === "reference") {
    return /* @__PURE__ */ jsx(LinkIcon, {
      color,
      fontSize
    });
  } else {
    return /* @__PURE__ */ jsx(Crop75Icon, {
      color,
      fontSize
    });
  }
}

const useStyles$j = makeStyles((theme) => createStyles({
  property: {
    display: "flex"
  },
  valuePreview: {
    height: "72px",
    padding: theme.spacing(2, 3)
  },
  iconCell: {
    paddingTop: theme.spacing(1)
  },
  titleCell: {
    width: "25%",
    padding: theme.spacing(1)
  }
}));
function EntityPreview$1({
  entity,
  schema,
  path
}) {
  const classes = useStyles$j();
  const appConfig = useFireCMSContext();
  const properties = schema.properties;
  return /* @__PURE__ */ jsx(TableContainer, {
    children: /* @__PURE__ */ jsx(Table$1, {
      "aria-label": "entity table",
      children: /* @__PURE__ */ jsxs(TableBody, {
        children: [/* @__PURE__ */ jsxs(TableRow, {
          children: [/* @__PURE__ */ jsx(TableCell$1, {
            align: "right",
            component: "td",
            scope: "row",
            className: classes.titleCell,
            children: /* @__PURE__ */ jsx(Typography, {
              variant: "caption",
              color: "textSecondary",
              children: "Id"
            })
          }), /* @__PURE__ */ jsx(TableCell$1, {
            padding: "none",
            className: classes.iconCell,
            children: getIdIcon("disabled", "small")
          }), /* @__PURE__ */ jsx(TableCell$1, {
            className: classes.valuePreview,
            children: /* @__PURE__ */ jsxs(Box, {
              display: "flex",
              alignItems: "center",
              children: [entity.id, appConfig?.entityLinkBuilder && /* @__PURE__ */ jsx("a", {
                href: appConfig.entityLinkBuilder({
                  entity
                }),
                rel: "noopener noreferrer",
                target: "_blank",
                children: /* @__PURE__ */ jsx(IconButton, {
                  "aria-label": "go-to-entity-datasource",
                  size: "large",
                  children: /* @__PURE__ */ jsx(OpenInNewIcon, {
                    fontSize: "small"
                  })
                })
              })]
            })
          })]
        }), schema && Object.entries(properties).map(([key, property]) => {
          const value = entity.values[key];
          return /* @__PURE__ */ jsxs(TableRow, {
            children: [/* @__PURE__ */ jsx(TableCell$1, {
              align: "right",
              component: "td",
              scope: "row",
              className: classes.titleCell,
              children: /* @__PURE__ */ jsx(Typography, {
                style: {
                  paddingLeft: "16px"
                },
                variant: "caption",
                color: "textSecondary",
                children: property.title
              })
            }), /* @__PURE__ */ jsx(TableCell$1, {
              padding: "none",
              className: classes.iconCell,
              children: getIconForProperty(property, "disabled", "small")
            }), /* @__PURE__ */ jsx(TableCell$1, {
              className: classes.valuePreview,
              children: /* @__PURE__ */ jsx(ErrorBoundary, {
                children: /* @__PURE__ */ jsx(PreviewComponent, {
                  name: key,
                  value,
                  property,
                  size: "regular"
                })
              })
            })]
          }, "entity_prev" + property.title + key);
        })]
      })
    })
  });
}

var EntityPreview$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    useStyles: useStyles$j,
    EntityPreview: EntityPreview$1,
    'default': EntityPreview$1
}, Symbol.toStringTag, { value: 'Module' }));

function getCellAlignment(property) {
  if (property.dataType === "boolean") {
    return "center";
  } else if (property.dataType === "number") {
    if (property.config?.enumValues)
      return "left";
    return "right";
  } else if (property.dataType === "timestamp") {
    return "right";
  } else {
    return "left";
  }
}
function getPropertyColumnWidth(property) {
  if (property.columnWidth) {
    return property.columnWidth;
  }
  if (property.dataType === "string") {
    if (property.config?.url) {
      if (property.config?.url === "video" || property.config?.storageMeta?.mediaType === "video")
        return 340;
      else if (property.config?.url === "audio" || property.config?.storageMeta?.mediaType === "audio")
        return 300;
      return 240;
    } else if (property.config?.storageMeta) {
      return 220;
    } else if (property.config?.enumValues) {
      return 200;
    } else if (property.config?.multiline) {
      return 300;
    } else if (property.config?.markdown) {
      return 300;
    } else if (property.validation?.email) {
      return 200;
    } else {
      return 200;
    }
  } else if (property.dataType === "array") {
    const arrayProperty = property;
    if (arrayProperty.of) {
      return getPropertyColumnWidth(arrayProperty.of);
    } else {
      return 300;
    }
  } else if (property.dataType === "number") {
    if (property.config?.enumValues) {
      return 200;
    }
    return 140;
  } else if (property.dataType === "map") {
    return 360;
  } else if (property.dataType === "timestamp") {
    return 160;
  } else if (property.dataType === "reference") {
    return 220;
  } else if (property.dataType === "boolean") {
    return 140;
  } else {
    return 200;
  }
}
function getSubcollectionColumnId(collection) {
  return `subcollection:${collection.path}`;
}
function useColumnIds(collection, resolvedSchema, includeSubcollections) {
  return useMemo(() => {
    const initialDisplayedProperties = collection.properties;
    const excludedProperties = collection.excludedProperties;
    const additionalColumns = collection.additionalColumns ?? [];
    const subCollections = collection.subcollections ?? [];
    const properties = resolvedSchema.properties;
    const hiddenColumnIds = Object.entries(properties).filter(([_, property]) => {
      return property.disabled && typeof property.disabled === "object" && property.disabled.hidden;
    }).map(([propertyKey, _]) => propertyKey);
    const columnIds = [...Object.keys(collection.schema.properties), ...additionalColumns.map((column) => column.id)];
    let result;
    if (initialDisplayedProperties) {
      result = initialDisplayedProperties.map((p) => {
        return columnIds.find((id) => id === p);
      }).filter((c) => !!c);
    } else if (excludedProperties) {
      result = columnIds.filter((id) => !excludedProperties.includes(id));
    } else {
      result = columnIds.filter((columnId) => !hiddenColumnIds.includes(columnId));
    }
    if (includeSubcollections) {
      const subCollectionIds = subCollections.map((collection2) => getSubcollectionColumnId(collection2)).filter((subColId) => excludedProperties ? !excludedProperties?.includes(subColId) : true);
      result.push(...subCollectionIds.filter((subColId) => !result.includes(subColId)));
    }
    return result;
  }, [collection.properties, collection.excludedProperties, collection.additionalColumns, collection.subcollections, collection.schema.properties, resolvedSchema.properties, includeSubcollections]);
}

const useStyles$i = makeStyles((theme) => createStyles({
  search: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: 40,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.mode === "light" ? alpha(theme.palette.common.black, 0.05) : darken$1(theme.palette.background.default, 0.2),
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? alpha(theme.palette.common.black, 0.1) : darken$1(theme.palette.background.default, 0.3)
    },
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    minHeight: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch"
    }
  },
  inputActive: {
    [theme.breakpoints.up("sm")]: {
      width: "20ch"
    }
  }
}));
function SearchBar({
  onTextSearch
}) {
  const classes = useStyles$i();
  const [searchText, setSearchText] = useState("");
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchText) {
        onTextSearch(searchText);
      } else {
        onTextSearch(void 0);
      }
    }, 250);
    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);
  const clearText = useCallback(() => {
    setSearchText("");
    onTextSearch(void 0);
  }, []);
  return /* @__PURE__ */ jsx(FormControl, {
    children: /* @__PURE__ */ jsxs("div", {
      className: classes.search,
      children: [/* @__PURE__ */ jsx("div", {
        className: classes.searchIcon,
        children: /* @__PURE__ */ jsx(SearchIcon, {
          htmlColor: "#666"
        })
      }), /* @__PURE__ */ jsx(InputBase, {
        placeholder: "Search",
        value: searchText,
        onChange: (event) => {
          setSearchText(event.target.value);
        },
        onFocus: () => setActive(true),
        onBlur: () => setActive(false),
        classes: {
          root: classes.inputRoot,
          input: clsx(classes.inputInput, {
            [classes.inputActive]: active
          })
        },
        endAdornment: searchText ? /* @__PURE__ */ jsx(IconButton, {
          size: "small",
          onClick: clearText,
          children: /* @__PURE__ */ jsx(ClearIcon, {
            fontSize: "small"
          })
        }) : /* @__PURE__ */ jsx("div", {
          style: {
            width: 26
          }
        }),
        inputProps: {
          "aria-label": "search"
        }
      })]
    })
  });
}

const useStyles$h = makeStyles((theme) => createStyles({
  toolbar: {
    minHeight: 56,
    [theme.breakpoints.down("xl")]: {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5)
    },
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    backgroundColor: theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  actions: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      [theme.breakpoints.down("md")]: {
        marginRight: theme.spacing(0.5)
      },
      marginRight: theme.spacing(1)
    }
  },
  selectRoot: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? alpha$1(theme.palette.common.black, 0.05) : darken(theme.palette.background.default, 0.2),
    fontSize: 14,
    fontWeight: theme.typography.fontWeightMedium,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4
    }
  },
  item: {
    backgroundColor: theme.palette.background.default,
    fontSize: 14,
    fontWeight: theme.typography.fontWeightMedium,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    "&:hover": {
      backgroundColor: darken(theme.palette.background.default, 0.1)
    },
    "&:focus": {
      backgroundColor: darken(theme.palette.background.default, 0.2),
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.text.primary
      }
    }
  }
}));
function CollectionTableToolbar(props) {
  const classes = useStyles$h();
  const theme = useTheme();
  const largeLayout = useMediaQuery(theme.breakpoints.up("md"));
  const filterView = props.filterIsSet && /* @__PURE__ */ jsx(Box, {
    display: "flex",
    alignItems: "center",
    children: /* @__PURE__ */ jsx(Tooltip, {
      title: "Clear filter",
      children: /* @__PURE__ */ jsx(IconButton, {
        style: {
          height: "fit-content"
        },
        "aria-label": "filter clear",
        onClick: props.clearFilter,
        size: "large",
        children: /* @__PURE__ */ jsx(ClearIcon, {})
      })
    })
  });
  return /* @__PURE__ */ jsxs("div", {
    className: classes.toolbar,
    children: [/* @__PURE__ */ jsxs(Box, {
      display: "flex",
      alignItems: "center",
      children: [props.title && /* @__PURE__ */ jsx(Hidden, {
        lgDown: true,
        children: /* @__PURE__ */ jsx(Box, {
          mr: 2,
          children: props.title
        })
      }), filterView]
    }), /* @__PURE__ */ jsxs("div", {
      className: classes.actions,
      children: [largeLayout && /* @__PURE__ */ jsx(Box, {
        width: 22,
        children: props.loading && /* @__PURE__ */ jsx(CircularProgress, {
          size: 16,
          thickness: 8
        })
      }), props.onTextSearch && /* @__PURE__ */ jsx(SearchBar, {
        onTextSearch: props.onTextSearch
      }, "search-bar"), props.actions]
    })]
  });
}

const useTableStyles$1 = makeStyles((theme) => createStyles({
  tableContainer: {
    width: "100%",
    height: "100%",
    flexGrow: 1
  },
  headerTypography: {
    fontSize: "0.750rem",
    fontWeight: 600,
    textTransform: "uppercase"
  },
  header: {
    width: "calc(100% + 24px)",
    margin: "0px -12px",
    padding: "0px 12px",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.default,
    transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    height: "100%",
    fontSize: "0.750rem",
    textTransform: "uppercase",
    fontWeight: 600
  },
  tableRow: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "0.875rem"
  },
  tableRowClickable: {
    "&:hover": {
      backgroundColor: theme.palette.mode === "dark" ? alpha$1(theme.palette.background.default, 0.6) : alpha$1(theme.palette.background.default, 0.5)
    }
  },
  column: {
    padding: "0px !important"
  },
  cellButtonsWrap: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.mode === "dark" ? alpha$1(theme.palette.background.default, 0.8) : alpha$1(theme.palette.background.default, 0.8)
  },
  cellButtons: {
    minWidth: 138
  },
  cellButtonsId: {
    width: 138,
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  selectContainer: {
    display: "flex",
    justifyContent: "space-around"
  },
  verticalLine: {
    width: "1px",
    backgroundColor: "#dfdfdf",
    height: "55px"
  },
  "select-all": {
    position: "absolute",
    top: "-100px",
    right: "-100px",
    opacity: "0"
  }
}));
function CollectionRowActions({
  entity,
  isSelected,
  isAllSelected,
  selectionEnabled,
  size,
  toggleEntitySelection,
  selectAll,
  onCopyClicked,
  onEditClicked,
  onDeleteClicked,
  data
}) {
  const editEnabled = Boolean(onEditClicked);
  const deleteEnabled = Boolean(onDeleteClicked);
  const classes = useTableStyles$1();
  const [anchorEl, setAnchorEl] = React__default.useState(null);
  useCallback((event) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  }, [setAnchorEl]);
  useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);
  const onCheckboxChange = (event) => {
    if (toggleEntitySelection)
      toggleEntitySelection(entity);
    event.stopPropagation();
  };
  const onCheckboxChange1 = (event) => {
    if (selectAll) {
      selectAll(entity);
    }
    event.stopPropagation();
  };
  useCallback((event) => {
    event.stopPropagation();
    if (onDeleteClicked)
      onDeleteClicked(entity);
    setAnchorEl(null);
  }, [entity, onDeleteClicked, setAnchorEl]);
  useCallback((event) => {
    event.stopPropagation();
    if (onCopyClicked)
      onCopyClicked(entity);
    setAnchorEl(null);
  }, [entity, onCopyClicked, setAnchorEl]);
  return /* @__PURE__ */ jsxs("div", {
    className: classes.cellButtonsWrap,
    children: [(editEnabled || deleteEnabled || selectionEnabled) && /* @__PURE__ */ jsxs("div", {
      className: classes.cellButtons,
      children: ["(", /* @__PURE__ */ jsxs("div", {
        className: classes.selectContainer,
        children: [editEnabled && /* @__PURE__ */ jsx(Tooltip, {
          title: `Edit ${entity.id}`,
          children: /* @__PURE__ */ jsx(IconButton, {
            onClick: (event) => {
              event.stopPropagation();
              if (onEditClicked)
                onEditClicked(entity);
            },
            size: "large",
            children: /* @__PURE__ */ jsx(KeyboardTab, {})
          })
        }), /* @__PURE__ */ jsx("span", {
          className: classes.verticalLine
        }), selectionEnabled && /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx(Tooltip, {
            title: `Select ${entity.id}`,
            style: {
              marginTop: "5px"
            },
            children: /* @__PURE__ */ jsx(Checkbox, {
              checked: isSelected,
              onChange: onCheckboxChange
            })
          }), /* @__PURE__ */ jsx(Tooltip, {
            title: "Select All",
            className: classes["select-all"] + " select-all",
            children: /* @__PURE__ */ jsx(Checkbox, {
              checked: isAllSelected,
              onChange: onCheckboxChange1
            })
          })]
        })]
      }), ")"]
    }), size !== "xs" && /* @__PURE__ */ jsx("div", {
      className: classes.cellButtonsId,
      children: entity ? /* @__PURE__ */ jsxs(Typography, {
        className: "mono",
        variant: "caption",
        color: "textSecondary",
        children: [" ", entity.id, " "]
      }) : /* @__PURE__ */ jsx(Skeleton, {
        variant: "text"
      })
    })]
  });
}

function getRowHeight(size) {
  switch (size) {
    case "xl":
      return 400;
    case "l":
      return 280;
    case "m":
      return 140;
    case "s":
      return 80;
    case "xs":
      return 54;
    default:
      throw Error("Missing mapping for collection size -> height");
  }
}

const useCellStyles = makeStyles((theme) => createStyles({
  tableCell: {
    position: "relative",
    height: "100%",
    width: "100%",
    border: "2px solid transparent",
    borderRadius: 4,
    overflow: "hidden",
    contain: "strict",
    display: "flex",
    padding: ({
      size,
      removePadding
    }) => {
      if (removePadding)
        return 0;
      switch (size) {
        case "l":
        case "xl":
          return theme.spacing(2);
        case "m":
          return theme.spacing(1);
        case "s":
          return theme.spacing(0.5);
        default:
          return theme.spacing(0.25);
      }
    },
    "&:hover": {
      backgroundColor: ({
        disabled
      }) => disabled ? void 0 : theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.background.default
    },
    justifyContent: ({
      align
    }) => {
      switch (align) {
        case "right":
          return "flex-end";
        case "center":
          return "center";
        case "left":
        default:
          return "flex-start";
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  fullHeight: {
    height: "100%"
  },
  error: {
    border: `2px solid ${theme.palette.error.light} !important`
  },
  selected: {
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.background.default,
    border: "2px solid #5E9ED6",
    transition: "border-color 300ms ease-in-out"
  },
  saved: {
    border: `2px solid ${theme.palette.success.light}`
  },
  disabled: {
    alpha: 0.8
  },
  iconsTop: {
    position: "absolute",
    top: 2,
    right: 2
  },
  arrow: {
    color: theme.palette.error.light
  },
  tooltip: {
    margin: "0 8px",
    backgroundColor: theme.palette.error.light
  },
  centered: {
    alignItems: "center"
  },
  faded: {
    "-webkit-mask-image": "linear-gradient(to bottom, black 60%, transparent 100%)",
    maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
    alignItems: "start"
  },
  scrollable: {
    overflow: "auto",
    alignItems: "start"
  }
}));
const TableCellInternal = ({
  children,
  selected,
  focused,
  disabled,
  disabledTooltip,
  size,
  saved,
  error,
  align,
  allowScroll,
  openPopup,
  removePadding,
  fullHeight,
  select,
  showExpandIcon = true
}) => {
  const ref = React__default.createRef();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const maxHeight = useMemo(() => getRowHeight(size), [size]);
  const [onHover, setOnHover] = useState(false);
  const [internalSaved, setInternalSaved] = useState(saved);
  const iconRef = React__default.createRef();
  useEffect(() => {
    if (iconRef.current && focused) {
      iconRef.current.focus({
        preventScroll: true
      });
    }
  }, [focused]);
  useEffect(() => {
    if (internalSaved !== saved) {
      if (saved) {
        setInternalSaved(true);
      } else {
        setInternalSaved(true);
      }
    }
    const removeSavedState = () => {
      setInternalSaved(false);
    };
    const handler = setTimeout(removeSavedState, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [saved]);
  const doOpenPopup = useCallback(() => {
    if (openPopup) {
      const cellRect = ref && ref?.current?.getBoundingClientRect();
      openPopup(cellRect);
    }
  }, [ref]);
  const onClick = useCallback((event) => {
    if (event.detail === 3) {
      doOpenPopup();
    }
  }, [doOpenPopup]);
  const onSelect = useCallback(() => {
    if (!select)
      return;
    const cellRect = ref && ref?.current?.getBoundingClientRect();
    if (disabled) {
      select(void 0);
    } else if (!selected && cellRect) {
      select(cellRect);
    }
  }, [ref, select, selected, disabled]);
  const onFocus = useCallback((event) => {
    onSelect();
    event.stopPropagation();
  }, [onSelect]);
  const onMeasure = useCallback((contentRect) => {
    if (contentRect?.bounds) {
      const newOverflowingValue = contentRect.bounds.height > maxHeight;
      if (isOverflowing !== newOverflowingValue)
        setIsOverflowing(newOverflowingValue);
    }
  }, [isOverflowing, maxHeight]);
  const cellClasses = useCellStyles({
    size,
    align,
    disabled,
    removePadding
  });
  const measuredDiv = /* @__PURE__ */ jsx(Measure, {
    bounds: true,
    onResize: onMeasure,
    children: ({
      measureRef
    }) => /* @__PURE__ */ jsx("div", {
      ref: measureRef,
      className: clsx(cellClasses.fullWidth, {
        [cellClasses.fullHeight]: fullHeight
      }),
      children
    })
  });
  return /* @__PURE__ */ jsxs("div", {
    tabIndex: selected || disabled ? void 0 : 0,
    ref,
    onFocus,
    onClick,
    onMouseEnter: () => setOnHover(true),
    onMouseMove: () => setOnHover(true),
    onMouseLeave: () => setOnHover(false),
    className: clsx(cellClasses.tableCell, {
      [cellClasses.disabled]: disabled,
      [cellClasses.centered]: disabled || !isOverflowing,
      [cellClasses.error]: error,
      [cellClasses.saved]: selected && internalSaved,
      [cellClasses.selected]: !error && (selected || focused),
      [cellClasses.fullHeight]: fullHeight
    }),
    children: [/* @__PURE__ */ jsx("div", {
      className: clsx(cellClasses.fullWidth, {
        [cellClasses.faded]: !disabled && !allowScroll && isOverflowing,
        [cellClasses.scrollable]: !disabled && allowScroll && isOverflowing,
        [cellClasses.fullHeight]: fullHeight
      }),
      children: measuredDiv
    }), disabled && onHover && disabledTooltip && /* @__PURE__ */ jsx("div", {
      style: {
        position: "absolute",
        top: 4,
        right: 4,
        fontSize: "14px"
      }
    }), (error || showExpandIcon) && /* @__PURE__ */ jsxs("div", {
      className: cellClasses.iconsTop,
      children: [selected && !disabled && showExpandIcon && /* @__PURE__ */ jsx(IconButton, {
        ref: iconRef,
        color: "inherit",
        size: "small",
        onClick: doOpenPopup,
        children: /* @__PURE__ */ jsxs("svg", {
          className: "MuiSvgIcon-root MuiSvgIcon-fontSizeSmall",
          fill: "#666",
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          children: [/* @__PURE__ */ jsx("path", {
            className: "cls-2",
            d: "M20,5a1,1,0,0,0-1-1L14,4h0a1,1,0,0,0,0,2h2.57L13.29,9.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L18,7.42V10a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1Z"
          }), /* @__PURE__ */ jsx("path", {
            className: "cls-2",
            d: "M10.71,13.29a1,1,0,0,0-1.42,0L6,16.57V14a1,1,0,0,0-1-1H5a1,1,0,0,0-1,1l0,5a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H7.42l3.29-3.29A1,1,0,0,0,10.71,13.29Z"
          })]
        })
      }), error && /* @__PURE__ */ jsx(Tooltip, {
        classes: {
          arrow: cellClasses.arrow,
          tooltip: cellClasses.tooltip
        },
        arrow: true,
        placement: "left",
        title: error.message,
        children: /* @__PURE__ */ jsx(ErrorOutlineIcon, {
          fontSize: "inherit",
          color: "error"
        })
      })]
    })]
  });
};
const TableCell = React__default.memo(TableCellInternal, areEqual$2);
function areEqual$2(prevProps, nextProps) {
  return prevProps.selected === nextProps.selected && prevProps.focused === nextProps.selected && prevProps.disabled === nextProps.disabled && prevProps.size === nextProps.size && prevProps.align === nextProps.align && prevProps.saved === nextProps.saved && prevProps.showExpandIcon === nextProps.showExpandIcon && prevProps.removePadding === nextProps.removePadding && prevProps.fullHeight === nextProps.fullHeight && isEqual(prevProps.value, nextProps.value);
}

yup.addMethod(yup.array, "uniqueInArray", function(mapper = (a) => a, message) {
  return this.test("uniqueInArray", message, (values) => {
    return !values || values.length === new Set(values.map(mapper)).size;
  });
});
function getYupEntitySchema(properties, customFieldValidator) {
  const objectSchema = {};
  Object.entries(properties).forEach(([name, property]) => {
    objectSchema[name] = mapPropertyToYup({
      property,
      customFieldValidator,
      name
    });
  });
  return yup.object().shape(objectSchema);
}
function mapPropertyToYup(propertyContext) {
  const property = propertyContext.property;
  if (typeof property === "function") {
    console.log("Error in property", propertyContext);
    throw Error("PropertyBuilders can only be defined as the root properties in entity schemas, not in child properties");
  }
  if (property.dataType === "string") {
    return getYupStringSchema(propertyContext);
  } else if (property.dataType === "number") {
    return getYupNumberSchema(propertyContext);
  } else if (property.dataType === "boolean") {
    return getYupBooleanSchema(propertyContext);
  } else if (property.dataType === "map") {
    return getYupMapObjectSchema(propertyContext);
  } else if (property.dataType === "array") {
    return getYupArraySchema(propertyContext);
  } else if (property.dataType === "timestamp") {
    return getYupDateSchema(propertyContext);
  } else if (property.dataType === "geopoint") {
    return getYupGeoPointSchema(propertyContext);
  } else if (property.dataType === "reference") {
    return getYupReferenceSchema(propertyContext);
  }
  console.error("Unsupported data type in yup mapping", property);
  throw Error("Unsupported data type in yup mapping");
}
function getYupMapObjectSchema({
  property,
  parentProperty,
  customFieldValidator,
  name
}) {
  const objectSchema = {};
  if (property.properties)
    Object.entries(property.properties).forEach(([childName, childProperty]) => {
      objectSchema[childName] = mapPropertyToYup({
        property: childProperty,
        parentProperty: property,
        customFieldValidator,
        name: `${name}[${childName}]`
      });
    });
  return yup.object().shape(objectSchema);
}
function getYupStringSchema({
  property,
  parentProperty,
  customFieldValidator,
  name
}) {
  let schema = yup.string();
  const validation = property.validation;
  if (property.config?.enumValues) {
    if (validation?.required)
      schema = schema.required(validation?.requiredMessage ? validation.requiredMessage : "Required");
    schema = schema.oneOf(enumToObjectEntries(property.config?.enumValues).map(([key, _]) => key));
  }
  if (validation) {
    schema = validation.required ? schema.required(validation?.requiredMessage ? validation.requiredMessage : "Required").nullable(true) : schema.notRequired().nullable(true);
    if (validation.unique && customFieldValidator && name)
      schema = schema.test("unique", "This value already exists and should be unique", (value, context) => customFieldValidator({
        name,
        property,
        parentProperty,
        value
      }));
    if (validation.min || validation.min === 0)
      schema = schema.min(validation.min, `${property.title} must be min ${validation.min} characters long`);
    if (validation.max || validation.max === 0)
      schema = schema.max(validation.max, `${property.title} must be max ${validation.max} characters long`);
    if (validation.matches)
      schema = schema.matches(validation.matches, validation.matchesMessage);
    if (validation.email)
      schema = schema.email(`${property.title} must be an email`);
    if (validation.url)
      schema = schema.url(`${property.title} must be a url`);
    if (validation.trim)
      schema = schema.trim();
    if (validation.lowercase)
      schema = schema.lowercase();
    if (validation.uppercase)
      schema = schema.uppercase();
  } else {
    schema = schema.notRequired().nullable(true);
  }
  return schema;
}
function getYupNumberSchema({
  property,
  parentProperty,
  customFieldValidator,
  name
}) {
  const validation = property.validation;
  let schema = yup.number().typeError("Must be a number");
  if (validation) {
    schema = validation.required ? schema.required(validation.requiredMessage ? validation.requiredMessage : "Required").nullable(true) : schema.notRequired().nullable(true);
    if (validation.unique && customFieldValidator && name)
      schema = schema.test("unique", "This value already exists and should be unique", (value) => customFieldValidator({
        name,
        property,
        parentProperty,
        value
      }));
    if (validation.min || validation.min === 0)
      schema = schema.min(validation.min, `${property.title} must be higher or equal to ${validation.min}`);
    if (validation.max || validation.max === 0)
      schema = schema.max(validation.max, `${property.title} must be lower or equal to ${validation.max}`);
    if (validation.lessThan || validation.lessThan === 0)
      schema = schema.lessThan(validation.lessThan, `${property.title} must be higher than ${validation.lessThan}`);
    if (validation.moreThan || validation.moreThan === 0)
      schema = schema.moreThan(validation.moreThan, `${property.title} must be lower than ${validation.moreThan}`);
    if (validation.positive)
      schema = schema.positive(`${property.title} must be positive`);
    if (validation.negative)
      schema = schema.negative(`${property.title} must be negative`);
    if (validation.integer)
      schema = schema.integer(`${property.title} must be an integer`);
  } else {
    schema = schema.notRequired().nullable(true);
  }
  return schema;
}
function getYupGeoPointSchema({
  property,
  parentProperty,
  customFieldValidator,
  name
}) {
  let schema = yup.object();
  const validation = property.validation;
  if (validation?.unique && customFieldValidator && name)
    schema = schema.test("unique", "This value already exists and should be unique", (value) => customFieldValidator({
      name,
      property,
      parentProperty,
      value
    }));
  if (validation?.required) {
    schema = schema.required(validation.requiredMessage).nullable(true);
  } else {
    schema = schema.notRequired().nullable(true);
  }
  return schema;
}
function getYupDateSchema({
  property,
  parentProperty,
  customFieldValidator,
  name
}) {
  if (property.autoValue) {
    return yup.object().nullable(true);
  }
  let schema = yup.date();
  const validation = property.validation;
  if (validation) {
    schema = validation.required ? schema.required(validation?.requiredMessage ? validation.requiredMessage : "Required").nullable(true) : schema.notRequired().nullable(true);
    if (validation.unique && customFieldValidator && name)
      schema = schema.test("unique", "This value already exists and should be unique", (value) => customFieldValidator({
        name,
        property,
        parentProperty,
        value
      }));
    if (validation.min)
      schema = schema.min(validation.min, `${property.title} must be after ${validation.min}`);
    if (validation.max)
      schema = schema.max(validation.max, `${property.title} must be before ${validation.min}`);
  } else {
    schema = schema.notRequired().nullable(true);
  }
  return schema;
}
function getYupReferenceSchema({
  property,
  parentProperty,
  customFieldValidator,
  name
}) {
  let schema = yup.object();
  const validation = property.validation;
  if (validation) {
    schema = validation.required ? schema.required(validation?.requiredMessage ? validation.requiredMessage : "Required").nullable(true) : schema.notRequired().nullable(true);
    if (validation.unique && customFieldValidator && name)
      schema = schema.test("unique", "This value already exists and should be unique", (value) => customFieldValidator({
        name,
        property,
        parentProperty,
        value
      }));
  } else {
    schema = schema.notRequired().nullable(true);
  }
  return schema;
}
function getYupBooleanSchema({
  property,
  parentProperty,
  customFieldValidator,
  name
}) {
  let schema = yup.boolean();
  const validation = property.validation;
  if (validation) {
    schema = validation.required ? schema.required(validation?.requiredMessage ? validation.requiredMessage : "Required").nullable(true) : schema.notRequired().nullable(true);
    if (validation.unique && customFieldValidator && name)
      schema = schema.test("unique", "This value already exists and should be unique", (value) => customFieldValidator({
        name,
        property,
        parentProperty,
        value
      }));
  } else {
    schema = schema.notRequired().nullable(true);
  }
  return schema;
}
function hasUniqueInArrayModifier(property) {
  if (property.validation?.uniqueInArray) {
    return true;
  } else if (property.dataType === "map" && property.properties) {
    return Object.entries(property.properties).filter(([key, childProperty]) => childProperty.validation?.uniqueInArray);
  }
  return false;
}
function getYupArraySchema({
  property,
  parentProperty,
  customFieldValidator,
  name
}) {
  let schema = yup.array();
  if (property.of) {
    schema = schema.of(mapPropertyToYup({
      property: property.of,
      parentProperty: property
    }));
    const arrayUniqueFields = hasUniqueInArrayModifier(property.of);
    if (arrayUniqueFields) {
      if (typeof arrayUniqueFields === "boolean") {
        schema = schema.uniqueInArray((v) => v, `${property.title} should have unique values within the array`);
      } else if (Array.isArray(arrayUniqueFields)) {
        arrayUniqueFields.forEach(([name2, childProperty]) => {
          schema = schema.uniqueInArray((v) => v && v[name2], `${property.title} \u2192 ${childProperty.title ?? name2}: should have unique values within the array`);
        });
      }
    }
  }
  const validation = property.validation;
  if (validation) {
    schema = validation.required ? schema.required(validation?.requiredMessage ? validation.requiredMessage : "Required").nullable(true) : schema.notRequired().nullable(true);
    if (validation.min || validation.min === 0)
      schema = schema.min(validation.min, `${property.title} should be min ${validation.min} entries long`);
    if (validation.max)
      schema = schema.max(validation.max, `${property.title} should be max ${validation.max} entries long`);
  } else {
    schema = schema.notRequired().nullable(true);
  }
  return schema;
}

const useInputStyles$2 = makeStyles((theme) => createStyles({
  input: {
    padding: 0,
    margin: 0,
    width: "100%",
    color: "unset",
    fontWeight: "unset",
    lineHeight: "unset",
    fontSize: "unset",
    fontFamily: "unset",
    background: "unset",
    border: "unset",
    resize: "none",
    outline: "none"
  }
}));
function TableInput(props) {
  const {
    disabled,
    value,
    multiline,
    updateValue,
    focused
  } = props;
  const [internalValue, setInternalValue] = useState(value);
  const focusedState = useRef(false);
  useEffect(() => {
    const doUpdate = () => {
      const emptyInitialValue = !value || value.length === 0;
      if (emptyInitialValue && !internalValue)
        return;
      if (internalValue !== value)
        updateValue(internalValue);
    };
    const handler = setTimeout(doUpdate, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [internalValue]);
  useEffect(() => {
    if (!focused && value !== internalValue)
      setInternalValue(value);
  }, [value, focused]);
  const classes = useInputStyles$2();
  const ref = React__default.createRef();
  useEffect(() => {
    if (ref.current && focused && !focusedState.current) {
      focusedState.current = true;
      ref.current.focus({
        preventScroll: true
      });
      ref.current.selectionStart = ref.current.value.length;
      ref.current.selectionEnd = ref.current.value.length;
    } else {
      focusedState.current = focused;
    }
  }, [focused, ref]);
  return /* @__PURE__ */ jsx("div", {
    style: {
      display: "flex"
    },
    children: /* @__PURE__ */ jsx(TextareaAutosize, {
      ref,
      disabled,
      className: clsx(classes.input),
      value: internalValue ?? "",
      onChange: (evt) => {
        const newValue = evt.target.value;
        if (multiline || !newValue.endsWith("\n"))
          setInternalValue(newValue);
      }
    })
  });
}

const useInputStyles$1 = makeStyles((theme) => createStyles({
  select: {
    height: "100%"
  },
  selectRoot: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  }
}));
function TableSelect(props) {
  const {
    name,
    enumValues,
    error,
    internalValue,
    disabled,
    small,
    focused,
    updateValue,
    multiple,
    setPreventOutsideClick,
    valueType
  } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setPreventOutsideClick(true);
    setOpen(true);
  };
  const handleClose = () => {
    setPreventOutsideClick(false);
    setOpen(false);
  };
  const classes = useInputStyles$1();
  const validValue = Array.isArray(internalValue) && multiple || !Array.isArray(internalValue) && !multiple;
  const ref = React__default.createRef();
  useEffect(() => {
    if (ref.current && focused) {
      ref.current?.focus({
        preventScroll: true
      });
    }
  }, [focused, ref]);
  return /* @__PURE__ */ jsx(Select$1, {
    variant: "standard",
    inputRef: ref,
    className: classes.select,
    classes: {
      select: classes.selectRoot
    },
    open,
    disabled,
    multiple,
    onClose: handleClose,
    onOpen: handleOpen,
    fullWidth: true,
    inputProps: {
      style: {
        height: "100%"
      }
    },
    disableUnderline: true,
    error: !!error,
    value: validValue ? multiple ? internalValue.map((v) => v.toString()) : internalValue : multiple ? [] : "",
    onChange: (evt) => {
      if (valueType === "number") {
        if (multiple) {
          const newValue = evt.target.value.map((v) => parseFloat(v));
          updateValue(newValue);
        } else {
          updateValue(parseFloat(evt.target.value));
        }
      } else if (valueType === "string") {
        if (!evt.target.value)
          updateValue(null);
        else
          updateValue(evt.target.value);
      } else {
        throw Error("Missing mapping in TableSelect");
      }
    },
    renderValue: (enumKey) => {
      if (multiple && Array.isArray(enumKey)) {
        return /* @__PURE__ */ jsx(ArrayEnumPreview, {
          value: enumKey,
          name,
          enumValues,
          size: small ? "small" : "regular"
        });
      } else {
        return /* @__PURE__ */ jsx(EnumValuesChip, {
          enumKey,
          enumValues,
          small
        });
      }
    },
    children: enumToObjectEntries(enumValues).map(([key, labelOrConfig]) => {
      const chip = /* @__PURE__ */ jsx(EnumValuesChip, {
        enumKey: key,
        enumValues,
        small: true
      });
      if (multiple) {
        return /* @__PURE__ */ jsxs(MenuItem, {
          value: key,
          disabled: isEnumValueDisabled(labelOrConfig),
          dense: true,
          children: [/* @__PURE__ */ jsx(Checkbox, {
            checked: Array.isArray(internalValue) && internalValue.map((v) => v.toString()).includes(key.toString())
          }), /* @__PURE__ */ jsx(ListItemText, {
            primary: chip
          })]
        }, `select-${name}-${key}`);
      } else {
        return /* @__PURE__ */ jsx(MenuItem, {
          value: key,
          disabled: isEnumValueDisabled(labelOrConfig),
          dense: true,
          children: chip
        }, `select-${name}-${key}`);
      }
    })
  }, `table_select_${name}`);
}

const useInputStyles = makeStyles((theme) => createStyles({
  input: {
    padding: 0,
    margin: 0,
    width: "100%",
    color: "unset",
    fontWeight: "unset",
    lineHeight: "unset",
    fontSize: "unset",
    fontFamily: "unset",
    background: "unset",
    border: "unset",
    resize: "none",
    outline: "none"
  },
  numberInput: {
    textAlign: "right"
  }
}));
function NumberTableInput(props) {
  const {
    align,
    value,
    updateValue,
    focused,
    onBlur,
    disabled
  } = props;
  const propStringValue = value && typeof value === "number" ? value.toString() : "";
  const [internalValue, setInternalValue] = useState(propStringValue);
  useEffect(() => {
    const doUpdate = () => {
      if (internalValue !== propStringValue) {
        if (internalValue !== void 0 && internalValue !== null) {
          const numberValue = parseFloat(internalValue);
          if (isNaN(numberValue))
            return;
          if (numberValue !== void 0 && numberValue !== null)
            updateValue(numberValue);
        } else {
          updateValue(null);
        }
      }
    };
    const handler = setTimeout(doUpdate, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [internalValue]);
  useEffect(() => {
    if (!focused && propStringValue !== internalValue)
      setInternalValue(value !== void 0 && value !== null ? value.toString() : null);
  }, [value, focused]);
  const ref = React__default.createRef();
  const classes = useInputStyles();
  useEffect(() => {
    if (ref.current && focused) {
      ref.current.focus({
        preventScroll: true
      });
    }
  }, [focused, ref]);
  const regexp = /^-?[0-9]+[,.]?[0-9]*$/;
  return /* @__PURE__ */ jsx(Input, {
    inputRef: ref,
    style: {
      width: "100%",
      fontSize: "unset",
      fontFamily: "unset",
      background: "unset",
      border: "unset",
      resize: "none",
      outline: "none",
      padding: 0
    },
    inputProps: {
      style: {
        textAlign: align
      }
    },
    disabled,
    className: clsx(classes.input, classes.numberInput),
    disableUnderline: true,
    value: internalValue ?? "",
    onBlur,
    onChange: (evt) => {
      const newValue = evt.target.value.replace(",", ".");
      if (newValue.length === 0)
        setInternalValue(null);
      if (regexp.test(newValue) || newValue.startsWith("-"))
        setInternalValue(newValue);
    }
  });
}

function TableSwitch(props) {
  const {
    disabled,
    internalValue,
    updateValue,
    focused
  } = props;
  const ref = React__default.createRef();
  useEffect(() => {
    if (ref.current && focused) {
      ref.current.focus({
        preventScroll: true
      });
    }
  }, [focused, ref]);
  return /* @__PURE__ */ jsx(Switch, {
    inputRef: ref,
    color: "secondary",
    checked: Boolean(internalValue),
    disabled,
    onChange: (evt) => {
      const value = evt.target.checked;
      updateValue(value);
    }
  });
}

makeStyles((theme) => createStyles({
  hidden: {
    display: "none"
  }
}));
function TableDateField(props) {
  const {
    disabled,
    error,
    internalValue,
    setPreventOutsideClick,
    updateValue
  } = props;
  const handleOpen = useCallback(() => {
    setPreventOutsideClick(true);
  }, []);
  const handleClose = useCallback(() => {
    setPreventOutsideClick(false);
  }, []);
  return /* @__PURE__ */ jsx(Box, {
    display: "flex",
    alignItems: "center",
    width: "100%",
    children: /* @__PURE__ */ jsx(DateTimePicker, {
      value: internalValue ?? null,
      clearable: true,
      disabled,
      onChange: (dateValue) => {
        updateValue(dateValue);
      },
      renderInput: (params) => /* @__PURE__ */ jsx(TextField$1, {
        ...params,
        variant: "standard",
        error: Boolean(error),
        style: {
          height: "100%"
        },
        InputProps: {
          ...params.InputProps,
          style: {
            fontSize: 14
          },
          disableUnderline: true
        }
      }),
      InputAdornmentProps: {
        style: {
          fontSize: "small",
          height: 26
        }
      },
      onOpen: handleOpen,
      onClose: handleClose
    })
  });
}

function TableReferenceField(props) {
  const {
    name,
    internalValue,
    setPreventOutsideClick,
    property,
    updateValue,
    size,
    disabled
  } = props;
  let usedProperty;
  let multiselect;
  if (property.dataType === "reference") {
    usedProperty = property;
    multiselect = false;
  } else if (property.dataType === "array" && property.of?.dataType === "reference") {
    usedProperty = property.of;
    multiselect = true;
  } else {
    throw Error("TableReferenceField misconfiguration");
  }
  if (typeof usedProperty.path !== "string") {
    throw Error("Picked the wrong component TableReferenceField");
  }
  const path = usedProperty.path;
  const [onHover, setOnHover] = useState(false);
  const [open, setOpen] = useState(false);
  const navigationContext = useNavigation();
  const collectionResolver = navigationContext.getCollectionResolver(path);
  if (!collectionResolver) {
    throw Error(`Couldn't find the corresponding collection view for the path: ${path}`);
  }
  const handleOpen = useCallback((event) => {
    if (disabled)
      return;
    if (event.detail <= 1) {
      event.stopPropagation();
      setPreventOutsideClick(true);
      setOpen(true);
    }
  }, [disabled, setPreventOutsideClick]);
  const handleClose = useCallback(() => {
    setPreventOutsideClick(false);
    setOpen(false);
  }, [setPreventOutsideClick, setOpen]);
  const onSingleValueSet = useCallback((entity) => {
    updateValue(entity ? getReferenceFrom(entity) : null);
    setPreventOutsideClick(false);
    setOpen(false);
  }, [updateValue, setPreventOutsideClick, setOpen]);
  const onMultipleEntitiesSelected = useCallback((entities) => {
    updateValue(entities.map((e) => getReferenceFrom(e)));
  }, [updateValue]);
  const selectedIds = internalValue ? Array.isArray(internalValue) ? internalValue.map((ref) => ref.id) : internalValue.id ? [internalValue.id] : [] : [];
  const valueNotSet = !internalValue || Array.isArray(internalValue) && internalValue.length === 0;
  function buildSingleReferenceField() {
    if (internalValue instanceof EntityReference)
      return /* @__PURE__ */ jsx(ReferencePreview, {
        name,
        onClick: disabled ? void 0 : handleOpen,
        value: internalValue,
        property: usedProperty,
        onHover,
        size: getPreviewSizeFrom(size)
      });
    else
      return /* @__PURE__ */ jsx(ErrorView, {
        error: "Data is not a reference"
      });
  }
  function buildMultipleReferenceField() {
    if (Array.isArray(internalValue))
      return /* @__PURE__ */ jsx(Fragment, {
        children: internalValue.map((v, index) => /* @__PURE__ */ jsx(Box, {
          sx: {
            m: 0.5
          },
          children: /* @__PURE__ */ jsx(ReferencePreview, {
            name: `${name}[${index}]`,
            onClick: disabled ? void 0 : handleOpen,
            size: "tiny",
            onHover,
            value: v,
            property: usedProperty
          })
        }, `preview_array_ref_${name}_${index}`))
      });
    else
      return /* @__PURE__ */ jsx(ErrorView, {
        error: "Data is not an array of references"
      });
  }
  if (!collectionResolver)
    return /* @__PURE__ */ jsx(ErrorView, {
      error: "The specified collection does not exist"
    });
  return /* @__PURE__ */ jsxs("div", {
    onMouseEnter: () => setOnHover(true),
    onMouseMove: () => setOnHover(true),
    onMouseLeave: () => setOnHover(false),
    children: [internalValue && !multiselect && buildSingleReferenceField(), internalValue && multiselect && buildMultipleReferenceField(), valueNotSet && /* @__PURE__ */ jsxs(Button, {
      onClick: handleOpen,
      size: "small",
      variant: "outlined",
      color: "primary",
      children: ["Edit ", property.title]
    }), !disabled && open && /* @__PURE__ */ jsx(ReferenceDialog, {
      open,
      multiselect,
      path,
      collectionResolver,
      onClose: handleClose,
      onMultipleEntitiesSelected,
      onSingleEntitySelected: onSingleValueSet,
      selectedEntityIds: selectedIds
    })]
  });
}

const useStyles$g = makeStyles((theme) => ({
  dropZone: {
    position: "relative",
    height: "100%",
    outline: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: ({
      hasValue
    }) => hasValue ? "start" : "center",
    alignItems: "center"
  },
  activeDrop: {
    borderRadius: "2px",
    border: "2px solid",
    borderColor: "transparent"
  },
  acceptDrop: {
    transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    background: "repeating-linear-gradient( 45deg, rgba(128, 128, 128, 0.2), rgba(128, 128, 128, 0.2) 10px, rgba(128, 128, 128, 0.25) 10px, rgba(128, 128, 128, 0.25) 20px) !important",
    borderColor: theme.palette.success.light
  },
  rejectDrop: {
    borderColor: theme.palette.error.light
  },
  arrayEntry: {
    border: "1px dashed transparent",
    borderRadius: "4px"
  },
  arrayEntryHovered: {
    opacity: 0.5,
    border: "1px dashed gray",
    boxSizing: "border-box"
  },
  thumbnailCloseIcon: {
    position: "absolute",
    borderRadius: "9999px",
    top: -8,
    right: -8,
    zIndex: 100,
    backgroundColor: theme.palette.background.paper
  }
}));
function TableStorageUpload(props) {
  const {
    name,
    error,
    internalValue,
    disabled,
    property,
    entityId,
    entityValues,
    previewSize,
    updateValue,
    setPreventOutsideClick
  } = props;
  const multipleFilesSupported = property.dataType === "array";
  const storageMeta = property.dataType === "string" ? property.config?.storageMeta : property.dataType === "array" && property.of.dataType === "string" ? property.of.config?.storageMeta : void 0;
  if (!storageMeta)
    throw Error("Storage meta must be specified");
  const fileNameBuilder = (file) => {
    if (storageMeta.fileName) {
      const fileName = storageMeta.fileName({
        entityId,
        values: entityValues,
        property,
        file,
        storageMeta,
        name
      });
      if (!fileName || fileName.length === 0) {
        throw Error("You need to return a valid filename");
      }
      return fileName;
    }
    return file.name;
  };
  const storagePathBuilder = (file) => {
    if (typeof storageMeta.storagePath === "string")
      return storageMeta.storagePath;
    if (typeof storageMeta.storagePath === "function") {
      const storagePath = storageMeta.storagePath({
        entityId,
        values: entityValues,
        property,
        file,
        storageMeta,
        name
      });
      if (!storagePath || storagePath.length === 0) {
        throw Error("You need to return a valid filename");
      }
      return storagePath;
    }
    console.warn("When using a storage property, if you don't specify the storagePath, the root storage is used");
    return "/";
  };
  return /* @__PURE__ */ jsx(StorageUpload$1, {
    value: internalValue,
    name,
    disabled,
    autoFocus: false,
    property,
    onChange: (newValue) => {
      updateValue(newValue);
    },
    fileNameBuilder,
    storagePathBuilder,
    storageMeta,
    multipleFilesSupported,
    previewSize
  });
}
function StorageUpload$1({
  property,
  name,
  value,
  onChange,
  multipleFilesSupported,
  previewSize: previewSizeInput,
  disabled,
  autoFocus,
  storageMeta,
  fileNameBuilder,
  storagePathBuilder
}) {
  const storage = useStorageSource();
  const [onHover, setOnHover] = useState(false);
  const previewSize = multipleFilesSupported && previewSizeInput === "regular" ? "small" : previewSizeInput;
  if (multipleFilesSupported) {
    const arrayProperty = property;
    if (arrayProperty.of) {
      if (arrayProperty.of.dataType !== "string") {
        throw Error("Storage field using array must be of data type string");
      }
    } else {
      throw Error("Storage field using array must be of data type string");
    }
  }
  const metadata = storageMeta?.metadata;
  const hasValue = Boolean(value);
  const classes = useStyles$g({
    hasValue
  });
  const internalInitialValue = value == null ? [] : (multipleFilesSupported ? value : [value]).map((entry) => ({
    id: getRandomId(),
    storagePathOrDownloadUrl: entry,
    metadata,
    size: previewSize
  }));
  const initialValue = React.useRef(value);
  const [internalValue, setInternalValue] = React.useState(internalInitialValue);
  if (!isEqual(initialValue.current, value)) {
    initialValue.current = value;
    setInternalValue(internalInitialValue ?? []);
  }
  function getRandomId() {
    return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
  }
  function removeDuplicates(items) {
    return items.filter((v, i) => {
      return (items.map((v2) => v2.storagePathOrDownloadUrl).indexOf(v.storagePathOrDownloadUrl) === i || !v.storagePathOrDownloadUrl) && (items.map((v2) => v2.file).indexOf(v.file) === i || !v.file);
    });
  }
  const onExternalDrop = (acceptedFiles) => {
    if (!acceptedFiles.length || disabled)
      return;
    let newInternalValue;
    if (multipleFilesSupported) {
      newInternalValue = [...internalValue, ...acceptedFiles.map((file) => ({
        id: getRandomId(),
        file,
        fileName: fileNameBuilder(file),
        metadata
      }))];
    } else {
      newInternalValue = [{
        id: getRandomId(),
        file: acceptedFiles[0],
        fileName: fileNameBuilder(acceptedFiles[0]),
        metadata
      }];
    }
    newInternalValue = removeDuplicates(newInternalValue);
    setInternalValue(newInternalValue);
  };
  const onFileUploadComplete = async (uploadedPath, entry, metadata2) => {
    let uploadPathOrDownloadUrl = uploadedPath;
    if (storageMeta.storeUrl) {
      uploadPathOrDownloadUrl = await storage.getDownloadURL(uploadedPath);
    }
    if (storageMeta.postProcess) {
      uploadPathOrDownloadUrl = await storageMeta.postProcess(uploadPathOrDownloadUrl);
    }
    let newValue;
    entry.storagePathOrDownloadUrl = uploadPathOrDownloadUrl;
    entry.metadata = metadata2;
    newValue = [...internalValue];
    newValue = removeDuplicates(newValue);
    setInternalValue(newValue);
    const fieldValue = newValue.filter((e) => !!e.storagePathOrDownloadUrl).map((e) => e.storagePathOrDownloadUrl);
    if (multipleFilesSupported) {
      onChange(fieldValue);
    } else {
      onChange(fieldValue ? fieldValue[0] : null);
    }
  };
  const onClear = (clearedStoragePathOrDownloadUrl) => {
    if (multipleFilesSupported) {
      const newValue = internalValue.filter((v) => v.storagePathOrDownloadUrl !== clearedStoragePathOrDownloadUrl);
      onChange(newValue.filter((v) => !!v.storagePathOrDownloadUrl).map((v) => v.storagePathOrDownloadUrl));
      setInternalValue(newValue);
    } else {
      onChange(null);
      setInternalValue([]);
    }
  };
  const {
    open,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: storageMeta.acceptedFiles,
    disabled,
    noClick: true,
    noKeyboard: true,
    onDrop: onExternalDrop
  });
  const {
    ...rootProps
  } = getRootProps();
  const helpText = multipleFilesSupported ? "Drag 'n' drop some files here, or click here to edit" : "Drag 'n' drop a file here, or click here edit";
  const renderProperty = multipleFilesSupported ? property.of : property;
  return /* @__PURE__ */ jsxs(Box, {
    ...rootProps,
    onMouseEnter: () => setOnHover(true),
    onMouseMove: () => setOnHover(true),
    onMouseLeave: () => setOnHover(false),
    className: clsx(classes.dropZone, {
      [classes.activeDrop]: isDragActive,
      [classes.rejectDrop]: isDragReject,
      [classes.acceptDrop]: isDragAccept
    }),
    children: [/* @__PURE__ */ jsx("input", {
      autoFocus,
      ...getInputProps()
    }), internalValue.map((entry, index) => {
      let child;
      if (entry.storagePathOrDownloadUrl) {
        child = /* @__PURE__ */ jsx(StorageItemPreview$1, {
          property: renderProperty,
          disabled,
          value: entry.storagePathOrDownloadUrl,
          onClear,
          size: previewSize
        }, `storage_preview_${index}`);
      } else if (entry.file) {
        child = /* @__PURE__ */ jsx(StorageUploadProgress$1, {
          entry,
          metadata,
          storagePath: storagePathBuilder(entry.file),
          onFileUploadComplete,
          size: previewSize
        }, `storage_progress_${index}`);
      }
      return child;
    }), !value && /* @__PURE__ */ jsx(Box, {
      sx: {
        flexGrow: 1,
        m: 2,
        maxWidth: 200
      },
      onClick: open,
      children: /* @__PURE__ */ jsx(Typography, {
        sx: {
          color: (theme) => theme.palette.mode === "light" ? "#999" : "#444"
        },
        variant: "body2",
        align: "center",
        children: helpText
      })
    }), onHover && /* @__PURE__ */ jsx(IconButton, {
      color: "inherit",
      size: "small",
      onClick: open,
      sx: {
        position: "absolute",
        bottom: 2,
        right: 2
      },
      children: /* @__PURE__ */ jsx(EditIcon, {
        sx: {
          width: 16,
          height: 16,
          fill: "#666"
        }
      })
    })]
  });
}
function StorageUploadProgress$1({
  storagePath,
  entry,
  metadata,
  onFileUploadComplete,
  size
}) {
  const storage = useStorageSource();
  const snackbarContext = useSnackbarController();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const mounted = React.useRef(false);
  const upload = useCallback((file, fileName) => {
    setError(void 0);
    setLoading(true);
    storage.uploadFile({
      file,
      fileName,
      path: storagePath,
      metadata
    }).then(async ({
      path
    }) => {
      console.debug("Upload successful");
      await onFileUploadComplete(path, entry, metadata);
      if (mounted.current)
        setLoading(false);
    }).catch((e) => {
      console.error("Upload error", e);
      if (mounted.current) {
        setError(e.message);
        setLoading(false);
      }
      snackbarContext.open({
        type: "error",
        title: "Error uploading file",
        message: e.message
      });
    });
  }, [entry, metadata, onFileUploadComplete, snackbarContext, storage, storagePath]);
  useEffect(() => {
    mounted.current = true;
    if (entry.file)
      upload(entry.file, entry.fileName);
    return () => {
      mounted.current = false;
    };
  }, [entry.file, entry.fileName, upload]);
  const imageSize = useMemo(() => getThumbnailMeasure(size), [size]);
  return /* @__PURE__ */ jsxs(Box, {
    m: 1,
    sx: {
      width: imageSize,
      height: imageSize
    },
    children: [loading && /* @__PURE__ */ jsx(Skeleton, {
      variant: "rectangular",
      sx: {
        width: imageSize,
        height: imageSize
      }
    }), error && /* @__PURE__ */ jsxs("p", {
      children: ["Error uploading file: ", error]
    })]
  });
}
function StorageItemPreview$1({
  property,
  value,
  size
}) {
  return /* @__PURE__ */ jsx(Box, {
    m: 1,
    position: "relative",
    children: value && /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(PreviewComponent, {
        value,
        property,
        size
      })
    })
  });
}

const PropertyTableCellInternal = ({
  selected,
  focused,
  name,
  setPreventOutsideClick,
  setFocused,
  onValueChange,
  select,
  openPopup,
  value,
  property,
  validation,
  size,
  align,
  width,
  height,
  entityId,
  entityValues
}) => {
  const [internalValue, setInternalValue] = useState(value);
  useClearRestoreValue({
    property,
    value: internalValue,
    setValue: setInternalValue
  });
  const [error, setError] = useState();
  const [saved, setSaved] = useState(false);
  const customField = Boolean(property.config?.Field);
  const customPreview = Boolean(property.config?.Preview);
  const readOnly = isReadOnly(property);
  const disabledTooltip = typeof property.disabled === "object" ? property.disabled.disabledMessage : void 0;
  const disabled = Boolean(property.disabled);
  const onBlur = useCallback(() => {
    setFocused(false);
  }, []);
  useEffect(() => {
    if (value !== internalValue) {
      setInternalValue(value);
    }
  }, [value]);
  useEffect(() => {
    if (!isEqual(value, internalValue)) {
      setSaved(false);
      validation.validate(internalValue).then(() => {
        setError(void 0);
        if (onValueChange) {
          onValueChange({
            value: internalValue,
            name,
            setError,
            setSaved
          });
        }
      }).catch((e) => {
        console.error(e);
        setError(e);
      });
    }
  }, [internalValue]);
  const updateValue = useCallback((newValue) => {
    let updatedValue;
    if (newValue === void 0) {
      updatedValue = null;
    } else {
      updatedValue = newValue;
    }
    setInternalValue(updatedValue);
  }, []);
  let innerComponent;
  let allowScroll = false;
  let showExpandIcon = false;
  let removePadding = false;
  let fullHeight = false;
  if (!readOnly && !customField && (!customPreview || selected)) {
    const isAStorageProperty = property.dataType === "string" && property.config?.storageMeta || property.dataType === "array" && property.of?.dataType === "string" && property.of?.config?.storageMeta;
    if (isAStorageProperty) {
      innerComponent = /* @__PURE__ */ jsx(TableStorageUpload, {
        error,
        disabled,
        focused,
        property,
        entityId,
        entityValues,
        internalValue,
        previewSize: getPreviewSizeFrom(size),
        updateValue,
        name,
        onBlur,
        setPreventOutsideClick
      });
      showExpandIcon = true;
      fullHeight = true;
      removePadding = true;
    } else if (selected && property.dataType === "number") {
      const numberProperty = property;
      if (numberProperty.config?.enumValues) {
        innerComponent = /* @__PURE__ */ jsx(TableSelect, {
          name,
          multiple: false,
          disabled,
          focused,
          valueType: "number",
          small: getPreviewSizeFrom(size) !== "regular",
          enumValues: numberProperty.config.enumValues,
          error,
          onBlur,
          internalValue,
          updateValue,
          setPreventOutsideClick
        });
      } else {
        innerComponent = /* @__PURE__ */ jsx(NumberTableInput, {
          align,
          error,
          focused,
          disabled,
          onBlur,
          value: internalValue,
          updateValue
        });
        allowScroll = true;
      }
    } else if (selected && property.dataType === "string") {
      const stringProperty = property;
      if (stringProperty.config?.enumValues) {
        innerComponent = /* @__PURE__ */ jsx(TableSelect, {
          name,
          multiple: false,
          focused,
          disabled,
          valueType: "string",
          small: getPreviewSizeFrom(size) !== "regular",
          enumValues: stringProperty.config.enumValues,
          error,
          onBlur,
          internalValue,
          updateValue,
          setPreventOutsideClick
        });
      } else if (!stringProperty.config?.storageMeta && !stringProperty.config?.markdown) {
        const multiline = !!stringProperty.config?.multiline;
        innerComponent = /* @__PURE__ */ jsx(TableInput, {
          error,
          disabled,
          multiline,
          focused,
          value: internalValue,
          updateValue
        });
        allowScroll = true;
      }
    } else if (property.dataType === "boolean") {
      innerComponent = /* @__PURE__ */ jsx(TableSwitch, {
        error,
        disabled,
        focused,
        internalValue,
        updateValue
      });
    } else if (property.dataType === "timestamp") {
      innerComponent = /* @__PURE__ */ jsx(TableDateField, {
        name,
        error,
        disabled,
        focused,
        internalValue,
        updateValue,
        setPreventOutsideClick
      });
      allowScroll = true;
    } else if (property.dataType === "reference") {
      if (typeof property.path === "string") {
        innerComponent = /* @__PURE__ */ jsx(TableReferenceField, {
          name,
          internalValue,
          updateValue,
          disabled,
          size,
          property,
          setPreventOutsideClick
        });
      }
      allowScroll = true;
    } else if (property.dataType === "array") {
      const arrayProperty = property;
      if (arrayProperty.of) {
        if (arrayProperty.of.dataType === "string" || arrayProperty.of.dataType === "number") {
          if (selected && arrayProperty.of.config?.enumValues) {
            innerComponent = /* @__PURE__ */ jsx(TableSelect, {
              name,
              multiple: true,
              disabled,
              focused,
              small: getPreviewSizeFrom(size) !== "regular",
              valueType: arrayProperty.of.dataType,
              enumValues: arrayProperty.of.config.enumValues,
              error,
              onBlur,
              internalValue,
              updateValue,
              setPreventOutsideClick
            });
            allowScroll = true;
          }
        } else if (arrayProperty.of.dataType === "reference") {
          if (typeof arrayProperty.of.path === "string") {
            innerComponent = /* @__PURE__ */ jsx(TableReferenceField, {
              name,
              disabled,
              internalValue,
              updateValue,
              size,
              property,
              setPreventOutsideClick
            });
          }
          allowScroll = false;
        }
      }
      if (!arrayProperty.of && !arrayProperty.oneOf) {
        throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${name}`);
      }
    }
  }
  if (!innerComponent) {
    allowScroll = false;
    showExpandIcon = selected && !innerComponent && !disabled && !readOnly;
    innerComponent = /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(PreviewComponent, {
        width,
        height,
        name,
        value: internalValue,
        property,
        size: getPreviewSizeFrom(size)
      })
    });
  }
  return /* @__PURE__ */ jsx(TableCell, {
    select,
    selected,
    focused,
    disabled: disabled || readOnly,
    disabledTooltip: disabledTooltip ?? "Disabled",
    removePadding,
    fullHeight,
    size,
    saved,
    error,
    align,
    allowScroll,
    showExpandIcon,
    openPopup: !disabled ? openPopup : void 0,
    value: internalValue,
    children: innerComponent
  });
};
const PropertyTableCell = React__default.memo(PropertyTableCellInternal, areEqual$1);
function areEqual$1(prevProps, nextProps) {
  return prevProps.selected === nextProps.selected && prevProps.focused === nextProps.selected && prevProps.height === nextProps.height && prevProps.size === nextProps.size && prevProps.align === nextProps.align && prevProps.width === nextProps.width && isEqual(prevProps.property, nextProps.property) && isEqual(prevProps.value, nextProps.value);
}

function useDraggable({
  containerRef,
  ref,
  x,
  y,
  onMove
}) {
  let relX = 0;
  let relY = 0;
  const onMouseDown = (event) => {
    if (event.button !== 0 || !ref.current || event.target !== ref.current) {
      return;
    }
    const {
      x: x2,
      y: y2
    } = ref.current.getBoundingClientRect();
    relX = event.screenX - x2;
    relY = event.screenY - y2;
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    event.stopPropagation();
  };
  const onMouseUp = (event) => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    event.stopPropagation();
  };
  const onMouseMove = (event) => {
    onMove(event.screenX - relX, event.screenY - relY);
    event.stopPropagation();
  };
  const update = () => {
    if (containerRef.current) {
      containerRef.current.style.top = `${y}px`;
      containerRef.current.style.left = `${x}px`;
    }
  };
  useEffect(() => {
    const current = ref.current;
    if (current)
      current.addEventListener("mousedown", onMouseDown);
    update();
    return () => {
      if (current)
        current.removeEventListener("mousedown", onMouseDown);
    };
  });
}

function useWindowSize() {
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });
  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function ArrayContainer({
  name,
  value,
  disabled,
  buildEntry,
  onInternalIdAdded,
  includeAddButton
}) {
  const hasValue = value && Array.isArray(value) && value.length > 0;
  const internalIdsMap = useMemo(() => hasValue ? value.map((v, index) => {
    if (!v)
      return {};
    return {
      [getHashValue(v) + index]: getRandomId()
    };
  }).reduce((a, b) => ({
    ...a,
    ...b
  }), {}) : {}, [value, hasValue]);
  const internalIdsRef = useRef(internalIdsMap);
  const [internalIds, setInternalIds] = useState(hasValue ? Object.values(internalIdsRef.current) : []);
  useEffect(() => {
    if (hasValue && value && value.length !== internalIds.length) {
      const newInternalIds = value.map((v, index) => {
        const hashValue = getHashValue(v) + index;
        if (hashValue in internalIdsRef.current) {
          return internalIdsRef.current[hashValue];
        } else {
          const newInternalId = getRandomId();
          internalIdsRef.current[hashValue] = newInternalId;
          return newInternalId;
        }
      });
      setInternalIds(newInternalIds);
    }
  }, [hasValue, internalIds.length, value]);
  return /* @__PURE__ */ jsx(FieldArray, {
    name,
    validateOnChange: true,
    render: (arrayHelpers) => {
      const insertInEnd = () => {
        if (disabled)
          return;
        const id = getRandomId();
        const newIds = [...internalIds, id];
        if (onInternalIdAdded)
          onInternalIdAdded(id);
        setInternalIds(newIds);
        arrayHelpers.push(null);
      };
      const remove = (index) => {
        const newValue = [...internalIds];
        newValue.splice(index, 1);
        setInternalIds(newValue);
        arrayHelpers.remove(index);
      };
      const onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        const newIds = [...internalIds];
        const temp = newIds[sourceIndex];
        newIds[sourceIndex] = newIds[destinationIndex];
        newIds[destinationIndex] = temp;
        setInternalIds(newIds);
        arrayHelpers.move(sourceIndex, destinationIndex);
      };
      return /* @__PURE__ */ jsx(DragDropContext, {
        onDragEnd,
        children: /* @__PURE__ */ jsx(Droppable, {
          droppableId: `droppable_${name}`,
          children: (droppableProvided, droppableSnapshot) => /* @__PURE__ */ jsxs("div", {
            ...droppableProvided.droppableProps,
            ref: droppableProvided.innerRef,
            children: [hasValue && internalIds.map((internalId, index) => {
              return /* @__PURE__ */ jsx(Draggable, {
                draggableId: `array_field_${name}_${internalId}}`,
                isDragDisabled: disabled,
                index,
                children: (provided, snapshot) => /* @__PURE__ */ jsx(Box, {
                  ref: provided.innerRef,
                  ...provided.draggableProps,
                  style: provided.draggableProps.style,
                  sx: {
                    marginBottom: 1,
                    borderRadius: "4px",
                    opacity: 1
                  },
                  children: /* @__PURE__ */ jsxs(Box, {
                    display: "flex",
                    children: [/* @__PURE__ */ jsx(Box, {
                      flexGrow: 1,
                      width: "100%",
                      children: buildEntry(index, internalId)
                    }, `field_${name}_entryValue`), /* @__PURE__ */ jsxs(Box, {
                      width: "36px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      children: [/* @__PURE__ */ jsx("div", {
                        ...provided.dragHandleProps,
                        children: /* @__PURE__ */ jsx(DragHandleIcon, {
                          fontSize: "small",
                          color: disabled ? "disabled" : "inherit",
                          sx: {
                            cursor: disabled ? "inherit" : "move"
                          }
                        })
                      }), !disabled && /* @__PURE__ */ jsx(IconButton, {
                        size: "small",
                        "aria-label": "remove",
                        onClick: () => remove(index),
                        children: /* @__PURE__ */ jsx(ClearIcon, {
                          fontSize: "small"
                        })
                      })]
                    })]
                  }, `field_${index}`)
                })
              }, `array_field_${name}_${internalId}}`);
            }), droppableProvided.placeholder, includeAddButton && !disabled && /* @__PURE__ */ jsx(Box, {
              p: 1,
              justifyContent: "center",
              textAlign: "left",
              children: /* @__PURE__ */ jsx(Button, {
                variant: "outlined",
                color: "primary",
                disabled,
                onClick: insertInEnd,
                children: "Add"
              })
            })]
          })
        })
      });
    }
  });
}
function getRandomId() {
  return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
}

function FieldDescription({
  property
}) {
  const disabledTooltip = typeof property.disabled === "object" ? property.disabled.disabledMessage : void 0;
  return /* @__PURE__ */ jsxs(Box, {
    display: "flex",
    children: [/* @__PURE__ */ jsx(Box, {
      flexGrow: 1,
      children: /* @__PURE__ */ jsx(FormHelperText, {
        children: disabledTooltip || property.description
      })
    }), property.longDescription && /* @__PURE__ */ jsx(Tooltip, {
      title: /* @__PURE__ */ jsx(Typography, {
        variant: "caption",
        children: property.longDescription
      }),
      placement: "bottom-start",
      arrow: true,
      children: /* @__PURE__ */ jsx(IconButton, {
        edge: "start",
        size: "small",
        children: /* @__PURE__ */ jsx(InfoIcon, {
          color: "disabled",
          fontSize: "small"
        })
      })
    })]
  });
}

function LabelWithIcon({
  property
}) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("span", {
      style: {
        paddingRight: "12px"
      },
      children: getIconForProperty(property)
    }), /* @__PURE__ */ jsx("span", {
      children: property.title
    })]
  });
}

const formStyles$3 = makeStyles((theme) => createStyles({
  inputLabel: {
    marginTop: theme.spacing(1 / 2),
    marginLeft: theme.spacing(1 / 2)
  },
  shrinkInputLabel: {
    marginTop: "-2px",
    marginLeft: theme.spacing(1 / 2)
  }
}));
function Select({
  name,
  value,
  setValue,
  error,
  showError,
  disabled,
  autoFocus,
  touched,
  property,
  includeDescription,
  shouldAlwaysRerender
}) {
  const classes = formStyles$3();
  const enumValues = property.config?.enumValues;
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  return /* @__PURE__ */ jsxs(FormControl, {
    variant: "filled",
    fullWidth: true,
    required: property.validation?.required,
    error: showError,
    disabled,
    children: [/* @__PURE__ */ jsx(InputLabel, {
      id: `${name}-select-label`,
      classes: {
        root: classes.inputLabel,
        shrink: classes.shrinkInputLabel
      },
      children: /* @__PURE__ */ jsx(LabelWithIcon, {
        property
      })
    }), /* @__PURE__ */ jsx(Select$1, {
      sx: {
        minHeight: "64px"
      },
      variant: "filled",
      labelId: `${name}-select-label`,
      autoFocus,
      value: value !== void 0 ? value : "",
      disabled,
      onChange: (evt) => {
        const eventValue = evt.target.value;
        const newValue = eventValue ? property.dataType === "number" ? parseFloat(eventValue) : eventValue : null;
        return setValue(newValue);
      },
      renderValue: (enumKey) => {
        return /* @__PURE__ */ jsx(EnumValuesChip, {
          enumKey,
          enumValues,
          small: false
        });
      },
      children: enumToObjectEntries(enumValues).map(([enumKey, labelOrConfig]) => {
        return /* @__PURE__ */ jsx(MenuItem, {
          value: enumKey,
          disabled: isEnumValueDisabled(labelOrConfig),
          children: /* @__PURE__ */ jsx(EnumValuesChip, {
            enumKey,
            enumValues,
            small: true
          })
        }, `select_${name}_${enumKey}`);
      })
    }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
      property
    }), showError && /* @__PURE__ */ jsx(FormHelperText, {
      children: error
    })]
  });
}

const formStyles$2 = makeStyles((theme) => createStyles({
  inputLabel: {
    marginTop: theme.spacing(1 / 2),
    marginLeft: theme.spacing(1 / 2)
  },
  shrinkInputLabel: {
    marginTop: "-2px",
    marginLeft: theme.spacing(1 / 2)
  }
}));
function ArrayEnumSelect({
  name,
  value,
  setValue,
  error,
  showError,
  disabled,
  property,
  includeDescription,
  autoFocus
}) {
  const classes = formStyles$2();
  if (!property.of) {
    throw Error("Using wrong component ArrayEnumSelect");
  }
  if (property.of.dataType !== "string" && property.of.dataType !== "number") {
    throw Error("Field misconfiguration: array field of type string or number");
  }
  const enumValues = property.of.config?.enumValues;
  if (!enumValues) {
    console.error(property);
    throw Error("Field misconfiguration: array field of type string or number needs to have enumValues");
  }
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  const validValue = !!value && Array.isArray(value);
  return /* @__PURE__ */ jsxs(FormControl, {
    variant: "filled",
    fullWidth: true,
    required: property.validation?.required,
    error: showError,
    children: [/* @__PURE__ */ jsx(InputLabel, {
      id: `${name}-multiselect-label`,
      classes: {
        root: classes.inputLabel,
        shrink: classes.shrinkInputLabel
      },
      children: /* @__PURE__ */ jsx(LabelWithIcon, {
        property
      })
    }), /* @__PURE__ */ jsx(Select$1, {
      multiple: true,
      sx: {
        minHeight: "64px"
      },
      variant: "filled",
      labelId: `${name}-multiselect-label`,
      value: validValue ? value.map((v) => v.toString()) : [],
      autoFocus,
      disabled,
      onChange: (evt) => {
        let newValue;
        if (property.of?.dataType === "number")
          newValue = evt.target.value ? evt.target.value.map((e) => parseFloat(e)) : [];
        else
          newValue = evt.target.value;
        return setValue(newValue);
      },
      renderValue: (selected) => /* @__PURE__ */ jsx(ArrayEnumPreview, {
        value: selected,
        name,
        enumValues,
        size: "regular"
      }),
      children: enumToObjectEntries(enumValues).map(([enumKey, labelOrConfig]) => {
        const checked = validValue && value.map((v) => v.toString()).includes(enumKey.toString());
        return /* @__PURE__ */ jsxs(MenuItem, {
          value: enumKey,
          disabled: isEnumValueDisabled(labelOrConfig),
          dense: true,
          children: [/* @__PURE__ */ jsx(Checkbox, {
            checked
          }), /* @__PURE__ */ jsx(ListItemText, {
            primary: /* @__PURE__ */ jsx(EnumValuesChip, {
              enumKey,
              enumValues,
              small: true
            })
          })]
        }, `form-select-${name}-${enumKey}`);
      })
    }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
      property
    }), showError && /* @__PURE__ */ jsx(FormHelperText, {
      children: error
    })]
  });
}

const useStyles$f = makeStyles((theme) => ({
  dropZone: {
    position: "relative",
    paddingTop: "2px",
    border: "2px solid transparent",
    minHeight: "254px",
    outline: 0,
    borderTopLeftRadius: "2px",
    borderTopRightRadius: "2px",
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
    borderBottom: theme.palette.mode === "light" ? "1px solid rgba(0, 0, 0, 0.42)" : "1px solid rgba(255, 255, 255, 0.7)",
    boxSizing: "border-box",
    transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    "&:focus": {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    }
  },
  disabled: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    color: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.38)" : "rgba(255, 255, 255, 0.38)",
    borderBottom: `1px dotted ${theme.palette.grey[400]}`
  },
  nonActiveDrop: {
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)"
    }
  },
  activeDrop: {
    paddingTop: "0px",
    boxSizing: "border-box",
    border: "2px solid"
  },
  acceptDrop: {
    transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    background: "repeating-linear-gradient( 45deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.09) 10px, rgba(0, 0, 0, 0.12) 10px, rgba(0, 0, 0, 0.12) 20px) !important",
    border: "2px solid",
    borderColor: theme.palette.success.light
  },
  rejectDrop: {
    border: "2px solid",
    borderColor: theme.palette.error.light
  },
  uploadItem: {
    padding: theme.spacing(1),
    minWidth: 220,
    minHeight: 220
  },
  uploadItemSmall: {
    padding: theme.spacing(1),
    minWidth: 118,
    minHeight: 118,
    boxSizing: "border-box"
  },
  thumbnailCloseIcon: {
    position: "absolute",
    borderRadius: "9999px",
    top: -8,
    right: -8,
    zIndex: 100,
    backgroundColor: theme.palette.background.paper
  }
}));
function StorageUploadField({
  name,
  value,
  setValue,
  error,
  showError,
  autoFocus,
  tableMode,
  property,
  includeDescription,
  context,
  isSubmitting
}) {
  const multipleFilesSupported = property.dataType === "array";
  const disabled = isReadOnly(property) || !!property.disabled || isSubmitting;
  const internalValue = multipleFilesSupported ? Array.isArray(value) ? value : [] : value;
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  const storageMeta = property.dataType === "string" ? property.config?.storageMeta : property.dataType === "array" && property.of.dataType === "string" ? property.of.config?.storageMeta : void 0;
  if (!storageMeta)
    throw Error("Storage meta must be specified");
  const fileNameBuilder = (file) => {
    if (storageMeta.fileName) {
      const fileName = storageMeta.fileName({
        entityId: context.entityId,
        values: context.values,
        property,
        file,
        storageMeta,
        name
      });
      if (!fileName || fileName.length === 0) {
        throw Error("You need to return a valid filename");
      }
      return fileName;
    }
    return file.name;
  };
  const storagePathBuilder = (file) => {
    if (typeof storageMeta.storagePath === "string")
      return storageMeta.storagePath;
    if (typeof storageMeta.storagePath === "function") {
      const storagePath = storageMeta.storagePath({
        entityId: context.entityId,
        values: context.values,
        property,
        file,
        storageMeta,
        name
      });
      if (!storagePath || storagePath.length === 0) {
        throw Error("You need to return a valid filename");
      }
      return storagePath;
    }
    console.warn("When using a storage property, if you don't specify the storagePath, the root storage is used");
    return "/";
  };
  return /* @__PURE__ */ jsxs(FormControl, {
    fullWidth: true,
    required: property.validation?.required,
    error: showError,
    children: [!tableMode && /* @__PURE__ */ jsx(FormHelperText, {
      filled: true,
      required: property.validation?.required,
      children: /* @__PURE__ */ jsx(LabelWithIcon, {
        property
      })
    }), /* @__PURE__ */ jsx(StorageUpload, {
      value: internalValue,
      name,
      disabled,
      autoFocus,
      property,
      onChange: (newValue) => {
        setValue(newValue);
      },
      fileNameBuilder,
      storagePathBuilder,
      storageMeta,
      multipleFilesSupported
    }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
      property
    }), showError && /* @__PURE__ */ jsx(FormHelperText, {
      children: error
    })]
  });
}
function FileDropComponent({
  storageMeta,
  disabled,
  isDraggingOver,
  onExternalDrop,
  multipleFilesSupported,
  droppableProvided,
  autoFocus,
  internalValue,
  property,
  onClear,
  metadata,
  storagePathBuilder,
  onFileUploadComplete,
  size,
  name,
  helpText
}) {
  const classes = useStyles$f();
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: storageMeta.acceptedFiles,
    disabled: disabled || isDraggingOver,
    noDragEventsBubbling: true,
    onDrop: onExternalDrop
  });
  return /* @__PURE__ */ jsxs(Box, {
    ...getRootProps(),
    className: clsx(classes.dropZone, {
      [classes.nonActiveDrop]: !isDragActive,
      [classes.activeDrop]: isDragActive,
      [classes.rejectDrop]: isDragReject,
      [classes.acceptDrop]: isDragAccept,
      [classes.disabled]: disabled
    }),
    sx: {
      display: multipleFilesSupported && internalValue.length ? void 0 : "flex",
      alignItems: "center"
    },
    children: [/* @__PURE__ */ jsxs(Box, {
      ...droppableProvided.droppableProps,
      ref: droppableProvided.innerRef,
      sx: {
        display: "flex",
        alignItems: "center",
        overflow: multipleFilesSupported && internalValue.length ? "auto" : void 0,
        minHeight: multipleFilesSupported && internalValue.length ? 180 : 250,
        p: 1,
        "&::-webkit-scrollbar": {
          display: "none"
        }
      },
      children: [/* @__PURE__ */ jsx("input", {
        autoFocus,
        ...getInputProps()
      }), internalValue.map((entry, index) => {
        let child;
        if (entry.storagePathOrDownloadUrl) {
          const renderProperty = multipleFilesSupported ? property.of : property;
          child = /* @__PURE__ */ jsx(StorageItemPreview, {
            name: `storage_preview_${entry.storagePathOrDownloadUrl}`,
            property: renderProperty,
            disabled,
            value: entry.storagePathOrDownloadUrl,
            onClear,
            size: entry.size
          });
        } else if (entry.file) {
          child = /* @__PURE__ */ jsx(StorageUploadProgress, {
            entry,
            metadata,
            storagePath: storagePathBuilder(entry.file),
            onFileUploadComplete,
            size
          });
        }
        return /* @__PURE__ */ jsx(Draggable, {
          draggableId: `array_field_${name}_${entry.id}}`,
          index,
          children: (provided, snapshot) => /* @__PURE__ */ jsx(Box, {
            ref: provided.innerRef,
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            style: provided.draggableProps.style,
            sx: {
              borderRadius: "4px"
            },
            children: child
          })
        }, `array_field_${name}_${entry.id}}`);
      }), droppableProvided.placeholder]
    }), /* @__PURE__ */ jsx(Box, {
      sx: {
        flexGrow: 1,
        minHeight: 38,
        boxSizing: "border-box",
        m: 2
      },
      children: /* @__PURE__ */ jsx(Typography, {
        align: "center",
        variant: "body2",
        sx: (theme) => ({
          color: "#838383",
          fontWeight: theme.typography.fontWeightMedium
        }),
        children: helpText
      })
    })]
  });
}
function StorageUpload({
  property,
  name,
  value,
  onChange,
  multipleFilesSupported,
  disabled,
  autoFocus,
  storageMeta,
  fileNameBuilder,
  storagePathBuilder
}) {
  const storage = useStorageSource();
  if (multipleFilesSupported) {
    const arrayProperty = property;
    if (arrayProperty.of) {
      if (arrayProperty.of.dataType !== "string") {
        throw Error("Storage field using array must be of data type string");
      }
    } else {
      throw Error("Storage field using array must be of data type string");
    }
  }
  const metadata = storageMeta?.metadata;
  const size = multipleFilesSupported ? "small" : "regular";
  const internalInitialValue = (multipleFilesSupported ? value : [value]).map((entry) => ({
    id: getRandomId(),
    storagePathOrDownloadUrl: entry,
    metadata,
    size
  }));
  const [initialValue, setInitialValue] = React.useState(value);
  const [internalValue, setInternalValue] = React.useState(internalInitialValue);
  React.useState(void 0);
  if (!isEqual(initialValue, value)) {
    setInitialValue(value);
    setInternalValue(internalInitialValue);
  }
  function getRandomId() {
    return Math.floor(Math.random() * Math.floor(Number.MAX_SAFE_INTEGER));
  }
  const moveItem = (fromIndex, toIndex) => {
    const newValue = [...internalValue];
    const item = newValue[fromIndex];
    newValue.splice(fromIndex, 1);
    newValue.splice(toIndex, 0, item);
    setInternalValue(newValue);
    const fieldValue = newValue.filter((e) => !!e.storagePathOrDownloadUrl).map((e) => e.storagePathOrDownloadUrl);
    onChange(fieldValue);
  };
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    moveItem(result.source.index, result.destination.index);
  };
  function removeDuplicates(items) {
    return items.filter((v, i) => {
      return (items.map((v2) => v2.storagePathOrDownloadUrl).indexOf(v.storagePathOrDownloadUrl) === i || !v.storagePathOrDownloadUrl) && (items.map((v2) => v2.file).indexOf(v.file) === i || !v.file);
    });
  }
  const onExternalDrop = (acceptedFiles) => {
    if (!acceptedFiles.length || disabled)
      return;
    let newInternalValue;
    if (multipleFilesSupported) {
      newInternalValue = [...internalValue, ...acceptedFiles.map((file) => ({
        id: getRandomId(),
        file,
        fileName: fileNameBuilder(file),
        metadata,
        size
      }))];
    } else {
      newInternalValue = [{
        id: getRandomId(),
        file: acceptedFiles[0],
        fileName: fileNameBuilder(acceptedFiles[0]),
        metadata,
        size
      }];
    }
    newInternalValue = removeDuplicates(newInternalValue);
    setInternalValue(newInternalValue);
  };
  const onFileUploadComplete = async (uploadedPath, entry, metadata2) => {
    console.debug("onFileUploadComplete", uploadedPath, entry);
    let uploadPathOrDownloadUrl = uploadedPath;
    if (storageMeta.storeUrl) {
      uploadPathOrDownloadUrl = await storage.getDownloadURL(uploadedPath);
    }
    if (storageMeta.postProcess) {
      uploadPathOrDownloadUrl = await storageMeta.postProcess(uploadPathOrDownloadUrl);
    }
    let newValue;
    entry.storagePathOrDownloadUrl = uploadPathOrDownloadUrl;
    entry.metadata = metadata2;
    newValue = [...internalValue];
    newValue = removeDuplicates(newValue);
    setInternalValue(newValue);
    const fieldValue = newValue.filter((e) => !!e.storagePathOrDownloadUrl).map((e) => e.storagePathOrDownloadUrl);
    if (multipleFilesSupported) {
      onChange(fieldValue);
    } else {
      onChange(fieldValue ? fieldValue[0] : null);
    }
  };
  const onClear = (clearedStoragePathOrDownloadUrl) => {
    if (multipleFilesSupported) {
      const newValue = internalValue.filter((v) => v.storagePathOrDownloadUrl !== clearedStoragePathOrDownloadUrl);
      onChange(newValue.filter((v) => !!v.storagePathOrDownloadUrl).map((v) => v.storagePathOrDownloadUrl));
      setInternalValue(newValue);
    } else {
      onChange(null);
      setInternalValue([]);
    }
  };
  const helpText = multipleFilesSupported ? "Drag 'n' drop some files here, or click to select files" : "Drag 'n' drop a file here, or click to select one";
  return /* @__PURE__ */ jsx(DragDropContext, {
    onDragEnd,
    children: /* @__PURE__ */ jsx(Droppable, {
      droppableId: `droppable_${name}`,
      direction: "horizontal",
      children: (provided, snapshot) => {
        return /* @__PURE__ */ jsx(FileDropComponent, {
          storageMeta,
          disabled,
          isDraggingOver: snapshot.isDraggingOver,
          droppableProvided: provided,
          onExternalDrop,
          multipleFilesSupported,
          autoFocus,
          internalValue,
          property,
          onClear,
          metadata,
          storagePathBuilder,
          onFileUploadComplete,
          size,
          name,
          helpText
        });
      }
    })
  });
}
function StorageUploadProgress({
  storagePath,
  entry,
  metadata,
  onFileUploadComplete,
  size
}) {
  const storage = useStorageSource();
  const classes = useStyles$f();
  const snackbarContext = useSnackbarController();
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const mounted = React.useRef(false);
  const upload = useCallback((file, fileName) => {
    setError(void 0);
    setLoading(true);
    storage.uploadFile({
      file,
      fileName,
      path: storagePath,
      metadata
    }).then(async ({
      path
    }) => {
      console.debug("Upload successful");
      await onFileUploadComplete(path, entry, metadata);
      if (mounted.current)
        setLoading(false);
    }).catch((e) => {
      console.error("Upload error", e);
      if (mounted.current) {
        setError(e.message);
        setLoading(false);
      }
      snackbarContext.open({
        type: "error",
        title: "Error uploading file",
        message: e.message
      });
    });
  }, [entry, metadata, onFileUploadComplete, snackbarContext, storage, storagePath]);
  React.useEffect(() => {
    mounted.current = true;
    if (entry.file)
      upload(entry.file, entry.fileName);
    return () => {
      mounted.current = false;
    };
  }, [entry.file, entry.fileName, upload]);
  return /* @__PURE__ */ jsx(Box, {
    m: 1,
    children: /* @__PURE__ */ jsxs(Paper, {
      elevation: 0,
      className: size === "regular" ? classes.uploadItem : classes.uploadItemSmall,
      variant: "outlined",
      children: [loading && /* @__PURE__ */ jsx(Skeleton, {
        variant: "rectangular",
        sx: {
          width: "100%",
          height: "100%"
        }
      }), error && /* @__PURE__ */ jsxs("p", {
        children: ["Error uploading file: ", error]
      })]
    })
  });
}
function StorageItemPreview({
  name,
  property,
  value,
  onClear,
  disabled,
  size
}) {
  const classes = useStyles$f();
  return /* @__PURE__ */ jsx(Box, {
    m: 1,
    position: "relative",
    children: /* @__PURE__ */ jsxs(Paper, {
      elevation: 0,
      className: size === "regular" ? classes.uploadItem : classes.uploadItemSmall,
      variant: "outlined",
      children: [!disabled && /* @__PURE__ */ jsx("a", {
        className: classes.thumbnailCloseIcon,
        children: /* @__PURE__ */ jsx(IconButton, {
          size: "small",
          onClick: (event) => {
            event.stopPropagation();
            onClear(value);
          },
          children: /* @__PURE__ */ jsx(ClearIcon, {
            fontSize: "small"
          })
        })
      }), value && /* @__PURE__ */ jsx(ErrorBoundary, {
        children: /* @__PURE__ */ jsx(PreviewComponent, {
          name,
          value,
          property,
          size
        })
      })]
    })
  });
}

const formStyles$1 = makeStyles((theme) => createStyles({
  inputLabel: {
    marginTop: theme.spacing(1 / 2),
    marginLeft: theme.spacing(1 / 2)
  },
  shrinkInputLabel: {
    marginTop: "-2px",
    marginLeft: theme.spacing(1 / 2)
  }
}));
function TextField({
  name,
  value,
  setValue,
  error,
  showError,
  disabled,
  autoFocus,
  property,
  includeDescription,
  allowInfinity,
  shouldAlwaysRerender
}) {
  const classes = formStyles$1();
  let mediaType;
  let multiline;
  if (property.dataType === "string") {
    const url = property.config?.url;
    mediaType = typeof url === "string" ? url : void 0;
    multiline = property.config?.multiline;
  }
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  const isMultiline = !!multiline;
  const internalValue = value ?? (property.dataType === "string" ? "" : value === 0 ? 0 : "");
  const valueIsInfinity = internalValue === Infinity;
  const inputType = !valueIsInfinity && property.dataType === "number" ? "number" : void 0;
  const updateValue = (newValue) => {
    if (!newValue) {
      setValue(null);
    } else if (inputType === "number") {
      const numValue = parseFloat(newValue);
      setValue(numValue);
    } else {
      setValue(newValue);
    }
  };
  const filledInput = /* @__PURE__ */ jsx(FilledInput, {
    sx: {
      minHeight: "64px"
    },
    autoFocus,
    type: inputType,
    multiline: isMultiline,
    inputProps: {
      rows: 4
    },
    value: valueIsInfinity ? "Infinity" : value ?? "",
    disabled,
    onChange: (evt) => {
      updateValue(evt.target.value);
    }
  });
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(FormControl, {
      variant: "filled",
      required: property.validation?.required,
      error: showError,
      disabled: valueIsInfinity,
      fullWidth: true,
      children: [/* @__PURE__ */ jsx(InputLabel, {
        classes: {
          root: classes.inputLabel,
          shrink: classes.shrinkInputLabel
        },
        children: /* @__PURE__ */ jsx(LabelWithIcon, {
          property
        })
      }), filledInput, /* @__PURE__ */ jsxs(Box, {
        display: "flex",
        children: [/* @__PURE__ */ jsxs(Box, {
          flexGrow: 1,
          children: [showError && /* @__PURE__ */ jsx(FormHelperText, {
            children: error
          }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
            property
          })]
        }), allowInfinity && /* @__PURE__ */ jsx(FormControlLabel, {
          checked: valueIsInfinity,
          style: {
            marginRight: 0
          },
          labelPlacement: "start",
          control: /* @__PURE__ */ jsx(Switch, {
            size: "small",
            type: "checkbox",
            onChange: (evt) => {
              updateValue(evt.target.checked ? Infinity : void 0);
            }
          }),
          disabled,
          label: /* @__PURE__ */ jsx(Typography, {
            variant: "caption",
            children: "Set value to Infinity"
          })
        })]
      })]
    }), mediaType && internalValue && /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(Box, {
        m: 1,
        children: /* @__PURE__ */ jsx(PreviewComponent, {
          name,
          value: internalValue,
          property,
          size: "regular"
        })
      })
    })]
  });
}

const useStyles$e = makeStyles((theme) => createStyles({
  formControl: {
    justifyContent: "space-between",
    margin: 0,
    width: "100%",
    minHeight: "64px",
    paddingLeft: "16px",
    paddingRight: "24px",
    color: "rgba(0, 0, 0, 0.87)",
    boxSizing: "border-box",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    "&::before": {
      borderBottom: theme.palette.mode === "light" ? "1px solid rgba(0, 0, 0, 0.42)" : "1px solid rgba(255, 255, 255, 0.7)",
      left: 0,
      bottom: 0,
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      pointerEvents: "none"
    },
    "&::after": {
      content: '""',
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      left: 0,
      bottom: 0,
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    "&:hover": {
      backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)"
    }
  },
  focus: {
    "&::before": {
      borderBottom: theme.palette.mode === "light" ? "1px solid rgba(255, 255, 255, 0.7)" : "1px solid rgba(0, 0, 0, 0.87)"
    },
    "&::after": {
      transform: "scaleX(1)",
      pointerEvents: "none"
    }
  }
}));
const SwitchFieldComponent = React__default.forwardRef(function({
  name,
  value,
  setValue,
  error,
  showError,
  autoFocus,
  disabled,
  touched,
  property,
  includeDescription,
  shouldAlwaysRerender
}, ref) {
  const classes = useStyles$e();
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  const [focus, setFocus] = useState(autoFocus);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs(FormControl, {
      fullWidth: true,
      children: [/* @__PURE__ */ jsx(FormControlLabel, {
        className: clsx(classes.formControl, {
          [classes.focus]: focus
        }),
        onClick: (e) => setFocus(true),
        labelPlacement: "start",
        checked: Boolean(value),
        inputRef: ref,
        control: /* @__PURE__ */ jsx(Switch, {
          type: "checkbox",
          color: "secondary",
          autoFocus,
          disabled,
          onFocus: (e) => setFocus(true),
          onBlur: (e) => setFocus(false),
          onChange: (evt) => {
            setFocus(true);
            setValue(evt.target.checked);
          }
        }),
        disabled,
        label: /* @__PURE__ */ jsx(Typography, {
          color: "textSecondary",
          children: /* @__PURE__ */ jsx(LabelWithIcon, {
            property
          })
        })
      }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
        property
      }), showError && /* @__PURE__ */ jsx(FormHelperText, {
        children: error
      })]
    })
  });
});
const SwitchField = (props) => {
  return /* @__PURE__ */ jsx(SwitchFieldComponent, {
    ...props
  });
};

function DateTimeField({
  name,
  value,
  setValue,
  autoFocus,
  error,
  showError,
  disabled,
  touched,
  property,
  includeDescription,
  shouldAlwaysRerender
}) {
  const internalValue = value || null;
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(DateTimePicker, {
      clearable: true,
      autoFocus,
      value: internalValue,
      label: /* @__PURE__ */ jsx(LabelWithIcon, {
        property
      }),
      renderInput: (props) => /* @__PURE__ */ jsx(TextField$1, {
        ...props,
        fullWidth: true,
        InputProps: {
          ...props.InputProps,
          sx: {
            minHeight: "64px"
          }
        },
        error: showError,
        variant: "filled",
        helperText: showError ? error : null
      }),
      disabled,
      onChange: (dateValue) => {
        return setValue(dateValue);
      }
    }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
      property
    })]
  });
}

const useStyles$d = makeStyles((theme) => createStyles({
  root: {
    elevation: 0,
    width: "100%",
    padding: theme.spacing(1),
    position: "relative",
    transition: "background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    borderTopLeftRadius: "2px",
    borderTopRightRadius: "2px",
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
    "&::before": {
      borderBottom: theme.palette.mode === "light" ? "1px solid rgba(0, 0, 0, 0.42)" : "1px solid rgba(255, 255, 255, 0.7)",
      left: 0,
      bottom: 0,
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      pointerEvents: "none"
    },
    "&::after": {
      content: '""',
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
      left: 0,
      bottom: 0,
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)"
    },
    color: "#838383",
    fontWeight: theme.typography.fontWeightMedium
  },
  disabled: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    color: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.38)" : "rgba(255, 255, 255, 0.38)",
    "&::before": {
      borderBottom: theme.palette.mode === "light" ? "1px dotted rgba(0, 0, 0, 0.42)" : "1px dotted rgba(255, 255, 255, 0.7)"
    },
    "&::after": {
      borderBottom: `2px dotted ${theme.palette.primary.main}`
    },
    "&:hover": {
      cursor: "inherit",
      backgroundColor: "rgba(0, 0, 0, 0.12)"
    }
  }
}));
function ReferenceField({
  name,
  value,
  setValue,
  error,
  showError,
  disabled,
  touched,
  autoFocus,
  property,
  includeDescription,
  context,
  shouldAlwaysRerender
}) {
  if (typeof property.path !== "string") {
    throw Error("Picked the wrong component ReferenceField");
  }
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  const classes = useStyles$d();
  const [open, setOpen] = React__default.useState(autoFocus);
  const sideEntityController = useSideEntityController();
  const navigationContext = useNavigation();
  const collectionResolver = useMemo(() => {
    return navigationContext.getCollectionResolver(property.path);
  }, [property.path, navigationContext]);
  if (!collectionResolver) {
    throw Error(`Couldn't find the corresponding collection for the path: ${property.path}`);
  }
  const schemaResolver = collectionResolver.schemaResolver;
  const path = property.path;
  const validValue = value && value instanceof EntityReference;
  const {
    entity,
    dataLoading,
    dataLoadingError
  } = useEntityFetch({
    path: validValue ? value.path : void 0,
    entityId: validValue ? value.id : void 0,
    schema: schemaResolver,
    useCache: true
  });
  const handleEntityClick = (entity2) => {
    if (disabled)
      return;
    setValue(entity2 ? getReferenceFrom(entity2) : null);
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const clearValue = (e) => {
    e.stopPropagation();
    setValue(null);
    setOpen(false);
  };
  const seeEntityDetails = (e) => {
    e.stopPropagation();
    if (entity)
      sideEntityController.open({
        entityId: entity.id,
        path,
        overrideSchemaRegistry: false
      });
  };
  const onClose = () => {
    setOpen(false);
  };
  function buildEntityView(schemaResolver2) {
    const missingEntity = entity && !entity.values;
    let body;
    if (!schemaResolver2) {
      body = /* @__PURE__ */ jsx(ErrorView, {
        error: "The specified collection does not exist. Check console"
      });
    } else if (missingEntity) {
      body = /* @__PURE__ */ jsx(Tooltip, {
        title: value && value.path,
        children: /* @__PURE__ */ jsxs(Box, {
          display: "flex",
          alignItems: "center",
          p: 1,
          flexGrow: 1,
          children: [/* @__PURE__ */ jsx(ErrorIcon, {
            fontSize: "small",
            color: "error"
          }), /* @__PURE__ */ jsxs(Box, {
            marginLeft: 1,
            children: ["Missing reference ", entity && entity.id]
          })]
        })
      });
    } else {
      if (validValue) {
        const schema = schemaResolver2({});
        const allProperties = Object.keys(schema.properties);
        let listProperties = property.previewProperties?.filter((p) => allProperties.includes(p));
        if (!listProperties || !listProperties.length) {
          listProperties = allProperties;
        }
        listProperties = listProperties.slice(0, 3);
        body = /* @__PURE__ */ jsx(Box, {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          ml: 1,
          mr: 1,
          children: listProperties && listProperties.map((key, index) => {
            const property2 = schema.properties[key];
            if (!property2)
              return null;
            return /* @__PURE__ */ jsx(Box, {
              mt: 0.5,
              mb: 0.5,
              children: /* @__PURE__ */ jsx(ErrorBoundary, {
                children: entity ? /* @__PURE__ */ jsx(PreviewComponent, {
                  name: key,
                  value: entity.values[key],
                  property: property2,
                  size: "tiny"
                }) : /* @__PURE__ */ jsx(SkeletonComponent, {
                  property: property2,
                  size: "tiny"
                })
              })
            }, `reference_previews_${key}`);
          })
        });
      } else {
        body = /* @__PURE__ */ jsxs(Box, {
          p: 1,
          onClick: disabled ? void 0 : handleClickOpen,
          justifyContent: "center",
          display: "flex",
          children: [/* @__PURE__ */ jsx(Typography, {
            variant: "body2",
            sx: (theme) => ({
              flexGrow: 1,
              textAlign: "center",
              color: "#838383",
              fontWeight: theme.typography.fontWeightMedium
            }),
            children: "No value set"
          }), !disabled && /* @__PURE__ */ jsx(Button, {
            variant: "outlined",
            color: "primary",
            children: "Set"
          })]
        });
      }
    }
    return /* @__PURE__ */ jsx(Box, {
      onClick: disabled ? void 0 : handleClickOpen,
      display: "flex",
      children: /* @__PURE__ */ jsxs(Box, {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        children: [/* @__PURE__ */ jsxs(Box, {
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          children: [/* @__PURE__ */ jsx(Box, {
            flexGrow: 1,
            children: /* @__PURE__ */ jsx(FormHelperText, {
              filled: true,
              required: property.validation?.required,
              children: /* @__PURE__ */ jsx(LabelWithIcon, {
                property
              })
            })
          }), entity && /* @__PURE__ */ jsx(Box, {
            alignSelf: "center",
            m: 1,
            children: /* @__PURE__ */ jsx(Tooltip, {
              title: value && value.path,
              children: /* @__PURE__ */ jsx(Typography, {
                variant: "caption",
                className: "mono",
                children: entity.id
              })
            })
          }), !missingEntity && entity && value && /* @__PURE__ */ jsx(Box, {
            children: /* @__PURE__ */ jsx(Tooltip, {
              title: `See details for ${entity.id}`,
              children: /* @__PURE__ */ jsx("span", {
                children: /* @__PURE__ */ jsx(IconButton, {
                  onClick: seeEntityDetails,
                  size: "large",
                  children: /* @__PURE__ */ jsx(KeyboardTabIcon, {})
                })
              })
            })
          }), value && /* @__PURE__ */ jsx(Box, {
            children: /* @__PURE__ */ jsx(Tooltip, {
              title: "Clear",
              children: /* @__PURE__ */ jsx("span", {
                children: /* @__PURE__ */ jsx(IconButton, {
                  disabled,
                  onClick: disabled ? void 0 : clearValue,
                  size: "large",
                  children: /* @__PURE__ */ jsx(ClearIcon, {})
                })
              })
            })
          })]
        }), body]
      })
    });
  }
  return /* @__PURE__ */ jsxs(FormControl, {
    error: showError,
    fullWidth: true,
    children: [/* @__PURE__ */ jsxs("div", {
      className: `${classes.root} ${disabled ? classes.disabled : ""}`,
      children: [schemaResolver && buildEntityView(schemaResolver), collectionResolver && /* @__PURE__ */ jsx(ReferenceDialog, {
        open,
        collectionResolver,
        multiselect: false,
        path,
        onClose,
        onSingleEntitySelected: handleEntityClick
      })]
    }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
      property
    }), showError && /* @__PURE__ */ jsx(FormHelperText, {
      children: error
    })]
  });
}

function ArrayDefaultField({
  name,
  value,
  error,
  showError,
  isSubmitting,
  setValue,
  tableMode,
  property,
  includeDescription,
  underlyingValueHasChanged,
  context,
  disabled,
  shouldAlwaysRerender
}) {
  if (!property.of)
    throw Error("ArrayDefaultField misconfiguration. Property `of` not set");
  const ofProperty = property.of;
  const [lastAddedId, setLastAddedId] = useState();
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  const buildEntry = (index, internalId) => {
    return buildPropertyField({
      name: `${name}[${index}]`,
      disabled,
      property: ofProperty,
      includeDescription,
      underlyingValueHasChanged,
      context,
      tableMode: false,
      partOfArray: true,
      autoFocus: internalId === lastAddedId,
      shouldAlwaysRerender: false
    });
  };
  return /* @__PURE__ */ jsxs(FormControl, {
    fullWidth: true,
    error: showError,
    children: [!tableMode && /* @__PURE__ */ jsx(FormHelperText, {
      filled: true,
      required: property.validation?.required,
      children: /* @__PURE__ */ jsx(LabelWithIcon, {
        property
      })
    }), /* @__PURE__ */ jsx(Paper, {
      variant: "outlined",
      sx: (theme) => ({
        elevation: 0,
        padding: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          padding: theme.spacing(2)
        }
      }),
      children: /* @__PURE__ */ jsx(ArrayContainer, {
        value,
        name,
        buildEntry,
        onInternalIdAdded: setLastAddedId,
        disabled: isSubmitting || Boolean(property.disabled),
        includeAddButton: !property.disabled
      })
    }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
      property
    }), showError && typeof error === "string" && /* @__PURE__ */ jsx(FormHelperText, {
      children: error
    })]
  });
}

function ArrayOneOfField({
  name,
  value,
  error,
  showError,
  isSubmitting,
  setValue,
  tableMode,
  property,
  includeDescription,
  underlyingValueHasChanged,
  context,
  disabled,
  shouldAlwaysRerender
}) {
  if (!property.oneOf)
    throw Error("ArrayOneOfField misconfiguration. Property `oneOf` not set");
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  const [lastAddedId, setLastAddedId] = useState();
  const buildEntry = (index, internalId) => {
    return /* @__PURE__ */ jsx(ArrayOneOfEntry, {
      name: `${name}[${index}]`,
      index,
      value: value[index],
      typeField: property.oneOf.typeField ?? "type",
      valueField: property.oneOf.valueField ?? "value",
      properties: property.oneOf.properties,
      autoFocus: internalId === lastAddedId,
      context
    }, `array_one_of_${index}`);
  };
  return /* @__PURE__ */ jsxs(FormControl, {
    fullWidth: true,
    error: showError,
    children: [!tableMode && /* @__PURE__ */ jsx(FormHelperText, {
      filled: true,
      required: property.validation?.required,
      children: /* @__PURE__ */ jsx(LabelWithIcon, {
        property
      })
    }), /* @__PURE__ */ jsx(Paper, {
      variant: "outlined",
      sx: (theme) => ({
        elevation: 0,
        padding: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          padding: theme.spacing(2)
        }
      }),
      children: /* @__PURE__ */ jsx(ArrayContainer, {
        value,
        name,
        buildEntry,
        onInternalIdAdded: setLastAddedId,
        disabled: isSubmitting || Boolean(property.disabled),
        includeAddButton: !property.disabled
      })
    }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
      property
    }), showError && typeof error === "string" && /* @__PURE__ */ jsx(FormHelperText, {
      children: error
    })]
  });
}
function ArrayOneOfEntry({
  name,
  index,
  value,
  typeField,
  valueField,
  properties,
  autoFocus,
  context
}) {
  const type = value && value[typeField];
  const [typeInternal, setTypeInternal] = useState(type ?? void 0);
  useEffect(() => {
    if (type !== typeInternal) {
      setTypeInternal(type);
    }
  }, [type]);
  const property = typeInternal ? properties[typeInternal] : void 0;
  const enumValues = Object.entries(properties).map(([key, property2]) => ({
    [key]: property2.title ?? key
  })).reduce((a, b) => ({
    ...a,
    ...b
  }));
  const typeFieldName = `${name}[${typeField}]`;
  const valueFieldName = `${name}[${valueField}]`;
  return /* @__PURE__ */ jsxs(Paper, {
    sx: (theme) => ({
      elevation: 0,
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2)
      }
    }),
    elevation: 0,
    children: [/* @__PURE__ */ jsx(FastField, {
      required: true,
      name: typeFieldName,
      children: (fieldProps) => /* @__PURE__ */ jsxs(FormControl, {
        fullWidth: true,
        children: [/* @__PURE__ */ jsx(InputLabel, {
          id: `${name}_${index}_select_label`,
          children: /* @__PURE__ */ jsx("span", {
            children: "Type"
          })
        }), /* @__PURE__ */ jsx(Select$1, {
          fullWidth: true,
          sx: {
            marginBottom: 2
          },
          labelId: `${name}_${index}_select_label`,
          value: fieldProps.field.value !== void 0 && fieldProps.field.value !== null ? fieldProps.field.value : "",
          onChange: (evt) => {
            const eventValue = evt.target.value;
            fieldProps.form.setFieldTouched(typeFieldName);
            setTypeInternal(eventValue);
            fieldProps.form.setFieldValue(typeFieldName, eventValue);
            fieldProps.form.setFieldValue(valueFieldName, null);
          },
          renderValue: (enumKey) => /* @__PURE__ */ jsx(EnumValuesChip, {
            enumKey,
            enumValues,
            small: true
          }),
          children: enumToObjectEntries(enumValues).map(([enumKey, labelOrConfig]) => {
            return /* @__PURE__ */ jsx(MenuItem, {
              value: enumKey,
              children: /* @__PURE__ */ jsx(EnumValuesChip, {
                enumKey,
                enumValues,
                small: true
              })
            }, `select_${name}_${index}_${enumKey}`);
          })
        })]
      })
    }), property && /* @__PURE__ */ jsx(FormControl, {
      fullWidth: true,
      children: buildPropertyField({
        name: valueFieldName,
        property,
        context,
        autoFocus
      })
    }, `form_control_${name}_${typeInternal}`)]
  });
}

function ReadOnlyField({
  name,
  value,
  setValue,
  error,
  showError,
  isSubmitting,
  touched,
  tableMode,
  property,
  includeDescription,
  context
}) {
  return /* @__PURE__ */ jsxs(FormControl, {
    fullWidth: true,
    error: showError,
    children: [!tableMode && /* @__PURE__ */ jsx(FormHelperText, {
      filled: true,
      required: property.validation?.required,
      children: /* @__PURE__ */ jsx(LabelWithIcon, {
        property
      })
    }), /* @__PURE__ */ jsx(Paper, {
      sx: (theme) => ({
        minHeight: "64px",
        elevation: 0,
        padding: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          padding: theme.spacing(3)
        }
      }),
      variant: "outlined",
      children: /* @__PURE__ */ jsx(ErrorBoundary, {
        children: /* @__PURE__ */ jsx(PreviewComponent, {
          name,
          value,
          property,
          size: "regular"
        })
      })
    }), showError && typeof error === "string" && /* @__PURE__ */ jsx(FormHelperText, {
      children: error
    }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
      property
    })]
  });
}

const useStyles$c = makeStyles((theme) => createStyles({
  root: {
    "& .w-md-editor-toolbar li > button": {
      color: theme.palette.text.secondary
    },
    "& .w-md-editor-toolbar li.active > button": {
      color: theme.palette.primary.main
    },
    "& .w-md-editor-text-pre, & .w-md-editor-text-pre .title, & .w-md-editor-text-pre .bold": {
      color: "inherit !important"
    },
    "& .wmde-markdown-color code.language-markdown": {
      color: "inherit"
    },
    "& .w-md-editor": {
      color: "inherit",
      backgroundColor: theme.palette.mode === "light" ? "rgb(240, 240, 240)" : "#323232"
    },
    "& .w-md-editor-toolbar": {
      borderBottom: "inherit",
      backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.09)"
    }
  }
}));
function MarkdownField({
  name,
  value,
  setValue,
  error,
  showError,
  disabled,
  autoFocus,
  touched,
  property,
  tableMode,
  includeDescription,
  context,
  shouldAlwaysRerender
}) {
  const classes = useStyles$c();
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  const updateValue = (newValue) => {
    if (!newValue) {
      setValue(null);
    } else {
      setValue(newValue);
    }
  };
  return /* @__PURE__ */ jsxs(FormControl, {
    required: property.validation?.required,
    error: showError,
    fullWidth: true,
    children: [!tableMode && /* @__PURE__ */ jsx(FormHelperText, {
      filled: true,
      required: property.validation?.required,
      children: /* @__PURE__ */ jsx(LabelWithIcon, {
        property
      })
    }), /* @__PURE__ */ jsx("div", {
      className: classes.root,
      children: /* @__PURE__ */ jsx(MDEditor, {
        value: typeof value === "string" ? value : "",
        preview: "edit",
        onChange: (value2) => updateValue(value2)
      })
    }), /* @__PURE__ */ jsx(Box, {
      display: "flex",
      children: /* @__PURE__ */ jsxs(Box, {
        flexGrow: 1,
        children: [showError && typeof error === "string" && /* @__PURE__ */ jsx(FormHelperText, {
          children: error
        }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
          property
        })]
      })
    })]
  });
}

function ArrayOfReferencesField({
  name,
  value,
  error,
  showError,
  isSubmitting,
  tableMode,
  property,
  includeDescription,
  setValue
}) {
  const ofProperty = property.of;
  if (ofProperty.dataType !== "reference") {
    throw Error("ArrayOfReferencesField expected a property containing references");
  }
  const [open, setOpen] = React__default.useState(false);
  const [onHover, setOnHover] = React__default.useState(false);
  const selectedIds = value && Array.isArray(value) ? value.map((ref) => ref.id) : [];
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  const navigationContext = useNavigation();
  const collectionResolver = useMemo(() => {
    return ofProperty.path ? navigationContext.getCollectionResolver(ofProperty.path) : void 0;
  }, [ofProperty.path]);
  if (!collectionResolver) {
    throw Error(`Couldn't find the corresponding collection for the path: ${ofProperty.path}`);
  }
  const onEntryClick = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onMultipleEntitiesSelected = (entities) => {
    setValue(entities.map((e) => getReferenceFrom(e)));
  };
  const buildEntry = (index, internalId) => {
    const entryValue = value && value.length > index ? value[index] : void 0;
    if (!entryValue)
      return /* @__PURE__ */ jsx("div", {
        children: "Internal ERROR"
      });
    return /* @__PURE__ */ jsx("div", {
      onMouseEnter: () => setOnHover(true),
      onMouseMove: () => setOnHover(true),
      onMouseLeave: () => setOnHover(false),
      children: /* @__PURE__ */ jsx(ReferencePreview, {
        value: entryValue,
        property: ofProperty,
        onHover,
        size: "regular",
        onClick: onEntryClick
      })
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(FormControl, {
      fullWidth: true,
      error: showError,
      children: [!tableMode && /* @__PURE__ */ jsx(FormHelperText, {
        filled: true,
        required: property.validation?.required,
        children: /* @__PURE__ */ jsx(LabelWithIcon, {
          property
        })
      }), /* @__PURE__ */ jsxs(Paper, {
        variant: "outlined",
        sx: (theme) => ({
          elevation: 0,
          padding: theme.spacing(2),
          [theme.breakpoints.up("md")]: {
            padding: theme.spacing(2)
          }
        }),
        children: [!collectionResolver && /* @__PURE__ */ jsx(ErrorView, {
          error: "The specified collection does not exist. Check console"
        }), collectionResolver && /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(ArrayContainer, {
            value,
            name,
            buildEntry,
            disabled: isSubmitting
          }), /* @__PURE__ */ jsx(Box, {
            p: 1,
            justifyContent: "center",
            textAlign: "left",
            children: /* @__PURE__ */ jsxs(Button, {
              variant: "outlined",
              color: "primary",
              disabled: isSubmitting,
              onClick: onEntryClick,
              children: ["Edit ", property.title]
            })
          })]
        })]
      }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
        property
      }), showError && typeof error === "string" && /* @__PURE__ */ jsx(FormHelperText, {
        children: error
      })]
    }), collectionResolver && ofProperty.path && /* @__PURE__ */ jsx(ReferenceDialog, {
      open,
      multiselect: true,
      collectionResolver,
      path: ofProperty.path,
      onClose,
      onMultipleEntitiesSelected,
      selectedEntityIds: selectedIds
    })]
  });
}

function buildPropertyField({
  name,
  property,
  context,
  includeDescription,
  underlyingValueHasChanged,
  disabled,
  tableMode,
  partOfArray,
  autoFocus,
  shouldAlwaysRerender
}) {
  let component;
  if (isReadOnly(property)) {
    component = ReadOnlyField;
  } else if (property.config?.Field) {
    component = property.config?.Field;
  } else if (property.dataType === "array") {
    const of = property.of;
    if (of) {
      if ((of.dataType === "string" || of.dataType === "number") && of.config?.enumValues) {
        component = ArrayEnumSelect;
      } else if (of.dataType === "string" && of.config?.storageMeta) {
        component = StorageUploadField;
      } else if (of.dataType === "reference") {
        component = ArrayOfReferencesField;
      } else {
        component = ArrayDefaultField;
      }
    }
    const oneOf = property.oneOf;
    if (oneOf) {
      component = ArrayOneOfField;
    }
    if (!of && !oneOf) {
      throw Error(`You need to specify an 'of' or 'oneOf' prop (or specify a custom field) in your array property ${name}`);
    }
  } else if (property.dataType === "map") {
    component = MapField;
  } else if (property.dataType === "reference") {
    if (!property.path)
      component = ReadOnlyField;
    else {
      component = ReferenceField;
    }
  } else if (property.dataType === "timestamp") {
    component = DateTimeField;
  } else if (property.dataType === "boolean") {
    component = SwitchField;
  } else if (property.dataType === "number") {
    if (property.config?.enumValues) {
      component = Select;
    } else {
      component = TextField;
    }
  } else if (property.dataType === "string") {
    if (property.config?.storageMeta) {
      component = StorageUploadField;
    } else if (property.config?.markdown) {
      component = MarkdownField;
    } else if (property.config?.enumValues) {
      component = Select;
    } else {
      component = TextField;
    }
  }
  if (component) {
    const componentProps = {
      name,
      property,
      includeDescription,
      underlyingValueHasChanged,
      context,
      disabled,
      tableMode,
      partOfArray,
      autoFocus,
      shouldAlwaysRerender
    };
    const FieldComponent = shouldAlwaysRerender || property.config?.Field ? Field : FastField;
    return /* @__PURE__ */ jsx(FieldComponent, {
      required: property.validation?.required,
      name: `${name}`,
      children: (fieldProps) => {
        return /* @__PURE__ */ jsx(FieldInternal, {
          component,
          componentProps,
          fieldProps
        });
      }
    });
  }
  return /* @__PURE__ */ jsx("div", {
    children: `Currently the field ${property.dataType} is not supported`
  });
}
function FieldInternal({
  component,
  componentProps: {
    name,
    property,
    includeDescription,
    underlyingValueHasChanged,
    tableMode,
    partOfArray,
    autoFocus,
    context,
    disabled,
    shouldAlwaysRerender
  },
  fieldProps
}) {
  const customFieldProps = property.config?.customProps;
  const value = fieldProps.field.value;
  const initialValue = fieldProps.meta.initialValue;
  const error = getIn(fieldProps.form.errors, name);
  const touched = getIn(fieldProps.form.touched, name);
  const showError = error && (fieldProps.form.submitCount > 0 || property.validation?.unique) && (!Array.isArray(error) || !!error.filter((e) => !!e).length);
  const isSubmitting = fieldProps.form.isSubmitting;
  const [internalValue, setInternalValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      fieldProps.form.setFieldValue(name, internalValue);
    }, 50);
    return () => {
      clearTimeout(handler);
    };
  }, [internalValue]);
  useEffect(() => {
    if (!isEqual(value, internalValue)) {
      setInternalValue(value);
    }
  }, [value]);
  const cmsFieldProps = {
    name,
    value: internalValue,
    initialValue,
    setValue: (value2) => {
      fieldProps.form.setFieldTouched(name, true, false);
      setInternalValue(value2);
    },
    error,
    touched,
    showError,
    isSubmitting,
    includeDescription: includeDescription ?? true,
    property,
    disabled: disabled ?? false,
    underlyingValueHasChanged: underlyingValueHasChanged ?? false,
    tableMode: tableMode ?? false,
    partOfArray: partOfArray ?? false,
    autoFocus: autoFocus ?? false,
    customProps: customFieldProps,
    context,
    shouldAlwaysRerender: shouldAlwaysRerender ?? true
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [React__default.createElement(component, cmsFieldProps), underlyingValueHasChanged && !isSubmitting && /* @__PURE__ */ jsx(FormHelperText, {
      children: "This value has been updated elsewhere"
    })]
  });
}

function MapField({
  name,
  value,
  showError,
  disabled,
  property,
  setValue,
  tableMode,
  includeDescription,
  underlyingValueHasChanged,
  context
}) {
  const pickOnlySomeKeys = property.config?.pickOnlySomeKeys || false;
  if (!property.properties) {
    throw Error(`You need to specify a 'properties' prop (or specify a custom field) in your map property ${name}`);
  }
  let mapProperties;
  if (!pickOnlySomeKeys) {
    mapProperties = property.properties;
  } else if (value) {
    mapProperties = pick(property.properties, ...Object.keys(value).filter((key) => key in property.properties));
  } else {
    mapProperties = {};
  }
  useClearRestoreValue({
    property,
    value,
    setValue
  });
  function buildPickKeysSelect() {
    const keys = Object.keys(property.properties).filter((key) => !value || !(key in value));
    const handleAddProperty = (event) => {
      setValue({
        ...value,
        [event.target.value]: null
      });
    };
    if (!keys.length)
      return /* @__PURE__ */ jsx(Fragment, {});
    return /* @__PURE__ */ jsx(Box, {
      m: 1,
      children: /* @__PURE__ */ jsxs(FormControl, {
        fullWidth: true,
        children: [/* @__PURE__ */ jsx(InputLabel, {
          children: "Add property"
        }), /* @__PURE__ */ jsx(Select$1, {
          variant: "standard",
          value: "",
          disabled,
          onChange: handleAddProperty,
          children: keys.map((key) => /* @__PURE__ */ jsx(MenuItem, {
            value: key,
            children: property.properties[key].title || key
          }, key))
        })]
      })
    });
  }
  return /* @__PURE__ */ jsxs(FormControl, {
    fullWidth: true,
    error: showError,
    children: [!tableMode && /* @__PURE__ */ jsx(FormHelperText, {
      filled: true,
      required: property.validation?.required,
      children: /* @__PURE__ */ jsx(LabelWithIcon, {
        property
      })
    }), /* @__PURE__ */ jsxs(Paper, {
      elevation: 0,
      variant: "outlined",
      sx: (theme) => ({
        elevation: 0,
        padding: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          padding: theme.spacing(2)
        }
      }),
      children: [/* @__PURE__ */ jsx(Grid, {
        container: true,
        spacing: 2,
        children: Object.entries(mapProperties).filter(([_, property2]) => !isHidden(property2)).map(([entryKey, childProperty], index) => {
          return /* @__PURE__ */ jsx(Grid, {
            item: true,
            sm: 12,
            xs: 12,
            children: buildPropertyField({
              name: `${name}[${entryKey}]`,
              disabled,
              property: childProperty,
              includeDescription,
              underlyingValueHasChanged,
              context,
              tableMode,
              partOfArray: false,
              autoFocus: false,
              shouldAlwaysRerender: false
            })
          }, `map-${name}-${index}`);
        })
      }), pickOnlySomeKeys && buildPickKeysSelect()]
    }), includeDescription && /* @__PURE__ */ jsx(FieldDescription, {
      property
    })]
  });
}

const ErrorFocus = ({
  containerRef
}) => {
  const {
    isSubmitting,
    isValidating,
    errors
  } = useFormikContext();
  useEffect(() => {
    const keys = Object.keys(errors);
    if (keys.length > 0 && isSubmitting && !isValidating) {
      const errorElement = containerRef?.current?.querySelector(`#form_field_${keys[0]}`);
      if (errorElement && containerRef?.current) {
        const scrollableParent = getScrollableParent(containerRef.current);
        if (scrollableParent) {
          const top = errorElement.getBoundingClientRect().top;
          scrollableParent.scrollTo({
            top: scrollableParent.scrollTop + top - 64,
            behavior: "smooth"
          });
        }
        const input = errorElement.querySelector("input");
        if (input)
          input.focus();
      }
    }
  }, [isSubmitting, isValidating, errors, containerRef]);
  return null;
};
const isScrollable = (ele) => {
  const hasScrollableContent = ele && ele.scrollHeight > ele.clientHeight;
  const overflowYStyle = ele ? window.getComputedStyle(ele).overflowY : null;
  const isOverflowHidden = overflowYStyle && overflowYStyle.indexOf("hidden") !== -1;
  return hasScrollableContent && !isOverflowHidden;
};
const getScrollableParent = (ele) => {
  return !ele || ele === document.body ? document.body : isScrollable(ele) ? ele : getScrollableParent(ele.parentNode);
};

const formStyles = makeStyles((theme) => createStyles({
  paper: {
    elevation: 0,
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2)
    }
  },
  largePadding: {
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3)
    }
  },
  inputLabel: {
    marginTop: theme.spacing(1 / 2),
    marginLeft: theme.spacing(1 / 2)
  },
  shrinkInputLabel: {
    marginTop: "-2px",
    marginLeft: theme.spacing(1 / 2)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    margin: theme.spacing(1)
  },
  form: {
    marginTop: theme.spacing(2)
  },
  input: {
    minHeight: "64px"
  },
  select: {
    paddingTop: theme.spacing(1 / 2)
  },
  oneOfInput: {
    marginBottom: theme.spacing(2)
  }
}));
function CustomIdField({
  schema,
  status,
  onChange,
  error,
  entity
}) {
  const classes = formStyles();
  const disabled = status === "existing" || !schema.customId;
  const idSetAutomatically = status !== "existing" && !schema.customId;
  const hasEnumValues = typeof schema.customId === "object";
  const snackbarContext = useSnackbarController();
  const {
    copy
  } = useClipboard({
    onSuccess: (text) => snackbarContext.open({
      type: "success",
      message: `Copied ${text}`
    })
  });
  const appConfig = useFireCMSContext();
  const inputProps = {
    className: classes.input,
    endAdornment: entity ? /* @__PURE__ */ jsxs(InputAdornment, {
      position: "end",
      children: [/* @__PURE__ */ jsx(IconButton, {
        onClick: (e) => copy(entity.id),
        "aria-label": "copy-id",
        size: "large",
        children: /* @__PURE__ */ jsx(Tooltip, {
          title: "Copy",
          children: /* @__PURE__ */ jsx("svg", {
            className: "MuiSvgIcon-root MuiSvgIcon-fontSizeSmall",
            fill: "currentColor",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            children: /* @__PURE__ */ jsx("path", {
              d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            })
          })
        })
      }), appConfig?.entityLinkBuilder && /* @__PURE__ */ jsx("a", {
        href: appConfig.entityLinkBuilder({
          entity
        }),
        rel: "noopener noreferrer",
        target: "_blank",
        children: /* @__PURE__ */ jsx(IconButton, {
          onClick: (e) => e.stopPropagation(),
          "aria-label": "go-to-datasource",
          size: "large",
          children: /* @__PURE__ */ jsx(Tooltip, {
            title: "Open in the console",
            children: /* @__PURE__ */ jsx(OpenInNewIcon, {
              fontSize: "small"
            })
          })
        })
      })]
    }) : void 0
  };
  const fieldProps = {
    label: idSetAutomatically ? "ID is set automatically" : "ID",
    disabled,
    name: "id",
    type: null,
    value: entity && status === "existing" ? entity.id : void 0,
    variant: "filled"
  };
  return /* @__PURE__ */ createElement$1(FormControl, {
    fullWidth: true,
    error,
    ...fieldProps,
    key: "custom-id-field"
  }, hasEnumValues && schema.customId && /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(InputLabel, {
      id: "id-label",
      children: fieldProps.label
    }), /* @__PURE__ */ jsx(Select$1, {
      labelId: "id-label",
      className: classes.select,
      error,
      ...fieldProps,
      onChange: (event) => onChange(event.target.value),
      children: Object.entries(schema.customId).map(([key, label]) => /* @__PURE__ */ jsx(MenuItem, {
        value: key,
        children: `${key} - ${label}`
      }, `custom-id-item-${key}`))
    })]
  }), !hasEnumValues && /* @__PURE__ */ jsx(TextField$1, {
    ...fieldProps,
    error,
    InputProps: inputProps,
    helperText: schema.customId === "optional" ? "Leave this blank to autogenerate an ID" : "ID of the new document",
    onChange: (event) => {
      let value = event.target.value;
      if (value)
        value = value.trim();
      return onChange(value.length ? value : void 0);
    }
  }), /* @__PURE__ */ jsx(ErrorMessage, {
    name: "id",
    component: "div",
    children: (_) => "You need to specify an ID"
  }));
}

const useStyles$b = makeStyles((theme) => createStyles({
  stickyButtons: {
    marginTop: theme.spacing(2),
    background: theme.palette.mode === "light" ? "rgba(255,255,255,0.6)" : "rgba(255, 255, 255, 0)",
    backdropFilter: "blur(4px)",
    borderTop: theme.palette.divider,
    position: "sticky",
    bottom: 0,
    zIndex: 200
  },
  container: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2)
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  form: {
    marginTop: theme.spacing(2)
  }
}));
function EntityForm$1({
  status,
  path,
  schemaOrResolver,
  entity,
  onEntitySave,
  onDiscard,
  onModified,
  onValuesChanged
}) {
  const classes = useStyles$b();
  const dataSource = useDataSource();
  const entityId = status === "existing" ? entity?.id : void 0;
  const initialResolvedSchema = useMemo(() => computeSchema({
    schemaOrResolver,
    path,
    entityId
  }), [path, entityId]);
  const baseDataSourceValues = useMemo(() => {
    const properties = initialResolvedSchema.properties;
    if ((status === "existing" || status === "copy") && entity) {
      return entity.values ?? initWithProperties(properties, initialResolvedSchema.defaultValues);
    } else if (status === "new") {
      return initWithProperties(properties, initialResolvedSchema.defaultValues);
    } else {
      console.error({
        status,
        entity
      });
      throw new Error("Form has not been initialised with the correct parameters");
    }
  }, [status, initialResolvedSchema, entity]);
  const formRef = React__default.useRef(null);
  const [customId, setCustomId] = React__default.useState(void 0);
  const [customIdError, setCustomIdError] = React__default.useState(false);
  const [savingError, setSavingError] = React__default.useState();
  const initialValuesRef = React__default.useRef(entity?.values ?? baseDataSourceValues);
  const initialValues = initialValuesRef.current;
  const [internalValue, setInternalValue] = useState(initialValues);
  const schema = useMemo(() => computeSchema({
    schemaOrResolver,
    path,
    entityId,
    values: internalValue,
    previousValues: initialValues
  }), [schemaOrResolver, path, entityId, internalValue]);
  const mustSetCustomId = (status === "new" || status === "copy") && !!schema.customId && schema.customId !== "optional";
  const underlyingChanges = useMemo(() => {
    if (initialValues && status === "existing") {
      return Object.keys(schema.properties).map((key) => {
        const initialValue = initialValues[key];
        const latestValue = baseDataSourceValues[key];
        if (!isEqual(initialValue, latestValue)) {
          return {
            [key]: latestValue
          };
        }
        return {};
      }).reduce((a, b) => ({
        ...a,
        ...b
      }), {});
    } else {
      return {};
    }
  }, [initialValues, baseDataSourceValues]);
  const saveValues = useCallback((values, formikActions) => {
    if (mustSetCustomId && !customId) {
      console.error("Missing custom Id");
      setCustomIdError(true);
      formikActions.setSubmitting(false);
      return;
    }
    setSavingError(null);
    setCustomIdError(false);
    let savedEntityId;
    if (status === "existing") {
      if (!entity?.id)
        throw Error("Form misconfiguration when saving, no id for existing entity");
      savedEntityId = entity.id;
    } else if (status === "new" || status === "copy") {
      if (schema.customId) {
        if (schema.customId !== "optional" && !customId) {
          throw Error("Form misconfiguration when saving, customId should be set");
        }
        savedEntityId = customId;
      }
    } else {
      throw Error("New FormType added, check EntityForm");
    }
    if (onEntitySave)
      onEntitySave({
        schema,
        path,
        entityId: savedEntityId,
        values,
        previousValues: entity?.values
      }).then((_) => {
        initialValuesRef.current = values;
        formikActions.setTouched({});
      }).catch((e) => {
        console.error(e);
        setSavingError(e);
      }).finally(() => {
        formikActions.setSubmitting(false);
      });
  }, [status, path, schema, entity, onEntitySave, mustSetCustomId, customId]);
  const uniqueFieldValidator = useCallback(({
    name,
    value,
    property
  }) => dataSource.checkUniqueField(path, name, value, property, entityId), [dataSource, path, entityId]);
  const validationSchema = useMemo(() => getYupEntitySchema(schema.properties, uniqueFieldValidator), [schema.properties]);
  return /* @__PURE__ */ jsx(Formik, {
    initialValues,
    onSubmit: saveValues,
    validationSchema,
    validate: (values) => console.debug("Validating", values),
    onReset: () => onDiscard && onDiscard(),
    children: ({
      values,
      touched,
      setFieldValue,
      handleSubmit,
      isSubmitting,
      dirty
    }) => {
      return /* @__PURE__ */ jsx(FormInternal, {
        baseDataSourceValues,
        values,
        onModified,
        setInternalValue,
        onValuesChanged,
        underlyingChanges,
        entityId,
        entity,
        touched,
        setFieldValue,
        schema,
        isSubmitting,
        classes,
        formRef,
        status,
        setCustomId,
        customIdError,
        handleSubmit,
        savingError
      });
    }
  });
}
function FormInternal({
  baseDataSourceValues,
  values,
  onModified,
  setInternalValue,
  onValuesChanged,
  underlyingChanges,
  entity,
  touched,
  setFieldValue,
  schema,
  entityId,
  isSubmitting,
  classes,
  formRef,
  status,
  setCustomId,
  customIdError,
  handleSubmit,
  savingError
}) {
  const modified = useMemo(() => !isEqual(baseDataSourceValues, values), [baseDataSourceValues, values]);
  useEffect(() => {
    if (onModified)
      onModified(modified);
    setInternalValue(values);
    if (onValuesChanged)
      onValuesChanged(values);
  }, [modified, values]);
  if (underlyingChanges && entity) {
    Object.entries(underlyingChanges).forEach(([key, value]) => {
      const formValue = values[key];
      if (!isEqual(value, formValue) && !touched[key]) {
        console.debug("Updated value from the datasource:", key, value);
        setFieldValue(key, value !== void 0 ? value : null);
      }
    });
  }
  const context = {
    schema,
    entityId,
    values
  };
  const formFields = /* @__PURE__ */ jsx(Grid, {
    container: true,
    spacing: 4,
    children: Object.entries(schema.properties).filter(([key, property]) => !isHidden(property)).map(([key, property]) => {
      const underlyingValueHasChanged = !!underlyingChanges && Object.keys(underlyingChanges).includes(key) && !!touched[key];
      const shouldAlwaysRerender = typeof schema.originalSchema.properties[key] === "function";
      const disabled = isSubmitting || isReadOnly(property) || Boolean(property.disabled);
      const cmsFormFieldProps = {
        name: key,
        disabled,
        property,
        includeDescription: true,
        underlyingValueHasChanged,
        context,
        tableMode: false,
        partOfArray: false,
        autoFocus: false,
        shouldAlwaysRerender
      };
      return /* @__PURE__ */ jsx(Grid, {
        item: true,
        xs: 12,
        id: `form_field_${key}`,
        children: buildPropertyField(cmsFormFieldProps)
      }, `field_${schema.name}_${key}`);
    })
  });
  return /* @__PURE__ */ jsxs(Container, {
    maxWidth: "sm",
    className: classes.container,
    ref: formRef,
    children: [/* @__PURE__ */ jsx(CustomIdField, {
      schema,
      status,
      onChange: setCustomId,
      error: customIdError,
      entity
    }), /* @__PURE__ */ jsxs(Form, {
      className: classes.form,
      onSubmit: handleSubmit,
      noValidate: true,
      children: [/* @__PURE__ */ jsx(Box, {
        pt: 3,
        children: formFields
      }), /* @__PURE__ */ jsxs("div", {
        className: classes.stickyButtons,
        children: [savingError && /* @__PURE__ */ jsx(Box, {
          textAlign: "right",
          children: /* @__PURE__ */ jsx(Typography, {
            color: "error",
            children: savingError.message
          })
        }), buildButtons(classes, isSubmitting, modified, status)]
      })]
    }), /* @__PURE__ */ jsx(ErrorFocus, {
      containerRef: formRef
    })]
  });
}
function buildButtons(classes, isSubmitting, modified, status) {
  const disabled = isSubmitting || !modified && status === "existing";
  return /* @__PURE__ */ jsxs(Box, {
    textAlign: "right",
    children: [status === "existing" && /* @__PURE__ */ jsx(Button, {
      variant: "text",
      color: "primary",
      disabled,
      className: classes.button,
      type: "reset",
      children: "Discard"
    }), /* @__PURE__ */ jsxs(Button, {
      variant: "contained",
      color: "primary",
      type: "submit",
      disabled,
      className: classes.button,
      children: [status === "existing" && "Save", status === "copy" && "Create copy", status === "new" && "Create"]
    })]
  });
}

var EntityForm$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    useStyles: useStyles$b,
    EntityForm: EntityForm$1,
    'default': EntityForm$1
}, Symbol.toStringTag, { value: 'Module' }));

const ElementResizeListener = ({
  onResize
}) => {
  const rafRef = useRef(0);
  const objectRef = useRef(null);
  const onResizeRef = useRef(onResize);
  onResizeRef.current = onResize;
  const _onResize = useCallback((e) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      onResizeRef.current(e);
    });
  }, []);
  const onLoad = useCallback(() => {
    const obj = objectRef.current;
    if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
      obj.contentDocument.defaultView.addEventListener("resize", _onResize);
    }
  }, [_onResize]);
  useEffect(() => {
    const obj = objectRef.current;
    return () => {
      if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
        obj.contentDocument.defaultView.removeEventListener("resize", _onResize);
      }
    };
  }, [_onResize]);
  return /* @__PURE__ */ jsx("object", {
    onLoad,
    ref: objectRef,
    tabIndex: -1,
    type: "text/html",
    data: "about:blank",
    title: "",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      pointerEvents: "none",
      zIndex: -1,
      opacity: 0
    }
  });
};

const useStyles$a = makeStyles((theme) => createStyles({
  form: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    marginTop: theme.spacing(1),
    alignSelf: "flex-end",
    position: "sticky",
    bottom: 0
  },
  popup: {
    display: "inline-block",
    userSelect: "none",
    position: "fixed",
    zIndex: 1300,
    boxShadow: "0 0 0 2px rgba(128,128,128,0.2)",
    borderRadius: "4px",
    backgroundColor: theme.palette.background.paper
  },
  popupInner: {
    padding: theme.spacing(2),
    overflow: "auto",
    cursor: "inherit"
  },
  hidden: {
    visibility: "hidden",
    zIndex: -1
  }
}));
function PopupFormField({
  tableKey,
  entity,
  customFieldValidator,
  name,
  schemaResolver,
  path,
  cellRect,
  setPreventOutsideClick,
  open,
  onClose,
  columnIndex,
  onCellValueChange
}) {
  const [savingError, setSavingError] = React__default.useState();
  const [popupLocation, setPopupLocation] = useState();
  const [internalValue, setInternalValue] = useState(entity?.values);
  const classes = useStyles$a();
  const windowSize = useWindowSize();
  const ref = React__default.useRef(null);
  const containerRef = React__default.useRef(null);
  const initialPositionSet = React__default.useRef(false);
  const draggableBoundingRect = ref.current?.getBoundingClientRect();
  useDraggable({
    containerRef,
    ref,
    x: popupLocation?.x,
    y: popupLocation?.y,
    onMove: (x, y) => onMove({
      x,
      y
    })
  });
  useEffect(() => {
    initialPositionSet.current = false;
  }, [name, entity]);
  const getInitialLocation = useCallback(() => {
    if (!cellRect)
      throw Error("getInitialLocation error");
    return {
      x: cellRect.left < windowSize.width - cellRect.right ? cellRect.x + cellRect.width / 2 : cellRect.x - cellRect.width / 2,
      y: cellRect.top < windowSize.height - cellRect.bottom ? cellRect.y + cellRect.height / 2 : cellRect.y - cellRect.height / 2
    };
  }, [cellRect, windowSize.height, windowSize.width]);
  const normalizePosition = useCallback(({
    x,
    y
  }) => {
    if (!draggableBoundingRect)
      throw Error("normalizePosition called before draggableBoundingRect is set");
    return {
      x: Math.max(0, Math.min(x, windowSize.width - draggableBoundingRect.width)),
      y: Math.max(0, Math.min(y, windowSize.height - draggableBoundingRect.height))
    };
  }, [draggableBoundingRect, windowSize]);
  const updatePopupLocation = useCallback((position) => {
    if (!cellRect || !draggableBoundingRect)
      return;
    const newPosition = normalizePosition(position ?? getInitialLocation());
    if (!popupLocation || newPosition.x !== popupLocation.x || newPosition.y !== popupLocation.y)
      setPopupLocation(newPosition);
  }, [cellRect, draggableBoundingRect, getInitialLocation, normalizePosition, popupLocation]);
  useEffect(() => {
    if (!cellRect || !draggableBoundingRect || initialPositionSet.current)
      return;
    initialPositionSet.current = true;
    updatePopupLocation(getInitialLocation());
  }, [cellRect, draggableBoundingRect, getInitialLocation, updatePopupLocation]);
  useLayoutEffect(() => {
    updatePopupLocation(popupLocation);
  }, [windowSize, cellRect]);
  useEffect(() => {
    setPreventOutsideClick(open);
  }, [open]);
  const validationSchema = useMemo(() => {
    if (!schemaResolver)
      return;
    const schema = computeSchema({
      schemaOrResolver: schemaResolver,
      path,
      values: internalValue,
      previousValues: entity?.values
    });
    return getYupEntitySchema(name && schema.properties[name] ? {
      [name]: schema.properties[name]
    } : {}, customFieldValidator);
  }, [path, internalValue, name]);
  const adaptResize = () => {
    if (!draggableBoundingRect)
      return;
    return updatePopupLocation(popupLocation);
  };
  const onMove = (position) => {
    if (!draggableBoundingRect)
      return;
    return updatePopupLocation(position);
  };
  const saveValue = async (values) => {
    setSavingError(null);
    if (entity && onCellValueChange && name) {
      return onCellValueChange({
        value: values[name],
        name,
        entity,
        setError: setSavingError,
        setSaved: () => {
        }
      });
    }
    return Promise.resolve();
  };
  if (!entity)
    return /* @__PURE__ */ jsx(Fragment, {});
  const form = entity && /* @__PURE__ */ jsxs("div", {
    style: {
      width: 520,
      maxWidth: "100vw",
      maxHeight: "85vh"
    },
    children: [/* @__PURE__ */ jsx(Formik, {
      initialValues: entity.values,
      validationSchema,
      validate: (values) => console.debug("Validating", values),
      onSubmit: (values, actions) => {
        saveValue(values).then(() => onClose()).finally(() => actions.setSubmitting(false));
      },
      children: ({
        handleChange,
        values,
        errors,
        touched,
        dirty,
        setFieldValue,
        setFieldTouched,
        handleSubmit,
        isSubmitting
      }) => {
        if (!isEqual(values, internalValue)) {
          setInternalValue(values);
        }
        if (!entity)
          return /* @__PURE__ */ jsx(ErrorView, {
            error: "PopupFormField misconfiguration"
          });
        if (!schemaResolver)
          return /* @__PURE__ */ jsx(Fragment, {});
        const disabled = isSubmitting;
        const schema = computeSchema({
          schemaOrResolver: schemaResolver,
          path,
          values,
          previousValues: entity?.values
        });
        const context = {
          schema,
          entityId: entity.id,
          values
        };
        const property = schema.properties[name];
        return /* @__PURE__ */ jsxs(Form, {
          className: classes.form,
          onSubmit: handleSubmit,
          noValidate: true,
          children: [name && property && buildPropertyField({
            name,
            disabled: isSubmitting || isReadOnly(property) || !!property.disabled,
            property,
            includeDescription: false,
            underlyingValueHasChanged: false,
            context,
            tableMode: true,
            partOfArray: false,
            autoFocus: open,
            shouldAlwaysRerender: true
          }), /* @__PURE__ */ jsx(Button, {
            className: classes.button,
            variant: "contained",
            color: "primary",
            type: "submit",
            disabled,
            children: "Save"
          })]
        });
      }
    }), savingError && /* @__PURE__ */ jsx(Typography, {
      color: "error",
      children: savingError.message
    })]
  }, `popup_form_${tableKey}_${entity.id}_${columnIndex}`);
  const draggable = /* @__PURE__ */ jsxs("div", {
    className: clsx(classes.popup, {
      [classes.hidden]: !open
    }),
    ref: containerRef,
    children: [/* @__PURE__ */ jsx(ElementResizeListener, {
      onResize: adaptResize
    }), /* @__PURE__ */ jsxs("div", {
      className: classes.popupInner,
      ref,
      children: [form, /* @__PURE__ */ jsx(IconButton, {
        size: "small",
        style: {
          position: "absolute",
          top: -14,
          right: -14,
          backgroundColor: "#666"
        },
        onClick: (event) => {
          event.stopPropagation();
          onClose();
        },
        children: /* @__PURE__ */ jsx(ClearIcon, {
          style: {
            color: "white"
          },
          fontSize: "small"
        })
      })]
    })]
  }, `draggable_${name}_${entity.id}`);
  return /* @__PURE__ */ jsx(Portal, {
    container: document.body,
    children: draggable
  });
}

function checkInlineEditing(inlineEditing, entity) {
  if (typeof inlineEditing === "boolean") {
    return inlineEditing;
  } else if (typeof inlineEditing === "function") {
    return inlineEditing(entity);
  } else {
    return true;
  }
}
function useBuildColumnsFromSchema({
  schemaResolver,
  additionalColumns,
  displayedProperties,
  path,
  inlineEditing,
  size,
  onCellValueChange,
  uniqueFieldValidator
}) {
  const context = useFireCMSContext();
  const [selectedCell, setSelectedCell] = React__default.useState(void 0);
  const [popupCell, setPopupCell] = React__default.useState(void 0);
  const [focused, setFocused] = React__default.useState(false);
  const [preventOutsideClick, setPreventOutsideClick] = React__default.useState(false);
  const tableKey = React__default.useRef(Math.random().toString(36));
  const additionalColumnsMap = useMemo(() => {
    return additionalColumns ? additionalColumns.map((aC) => ({
      [aC.id]: aC
    })).reduce((a, b) => ({
      ...a,
      ...b
    }), []) : {};
  }, [additionalColumns]);
  useEffect(() => {
    const escFunction = (event) => {
      if (event.keyCode === 27) {
        unselect();
      }
    };
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  });
  const select = useCallback((cell) => {
    setSelectedCell(cell);
    setFocused(true);
  }, []);
  const unselect = useCallback(() => {
    setSelectedCell(void 0);
    setFocused(false);
    setPreventOutsideClick(false);
  }, []);
  const onPopupClose = useCallback(() => {
    setPopupCell(void 0);
    setFocused(true);
  }, []);
  const buildFilterEnumValues = useCallback((values) => enumToObjectEntries(values).filter(([enumKey, labelOrConfig]) => !isEnumValueDisabled(labelOrConfig)).map(([enumKey, labelOrConfig]) => ({
    [enumKey]: buildEnumLabel(labelOrConfig)
  })).reduce((a, b) => ({
    ...a,
    ...b
  }), {}), []);
  const buildFilterableFromProperty = useCallback((property, isArray = false) => {
    if (property.dataType === "number" || property.dataType === "string") {
      const title = property.title;
      const enumValues = property.config?.enumValues;
      return {
        dataType: property.dataType,
        isArray,
        title,
        enumValues: enumValues ? buildFilterEnumValues(enumValues) : void 0
      };
    } else if (property.dataType === "array" && property.of) {
      return buildFilterableFromProperty(property.of, true);
    } else if (property.dataType === "boolean") {
      const title = property.title;
      return {
        dataType: property.dataType,
        isArray,
        title
      };
    } else if (property.dataType === "timestamp") {
      const title = property.title;
      return {
        dataType: property.dataType,
        isArray,
        title
      };
    }
    return void 0;
  }, [buildFilterEnumValues]);
  const resolvedSchema = useMemo(() => computeSchema({
    schemaOrResolver: schemaResolver,
    path
  }), [schemaResolver, path]);
  const auth = useAuthController();
  const isGlobalAdmin = auth.extra.admin;
  const newProps = {};
  Object.keys(resolvedSchema.properties).forEach((k) => {
    if (resolvedSchema.properties[k].onlyForGlobalAdmin) {
      if (isGlobalAdmin) {
        newProps[k] = resolvedSchema.properties[k];
      }
    } else {
      newProps[k] = resolvedSchema.properties[k];
    }
  });
  resolvedSchema.properties = newProps;
  const propertyCellRenderer = ({
    column,
    columnIndex,
    rowData,
    rowIndex
  }) => {
    const entity = rowData;
    const name = column.dataKey;
    const resolvedSchema2 = schemaResolver({
      entityId: entity.id,
      values: entity.values
    });
    const property = resolvedSchema2.properties[name];
    if (!property)
      return null;
    const inlineEditingEnabled = checkInlineEditing(inlineEditing, entity);
    if (!inlineEditingEnabled) {
      return /* @__PURE__ */ jsx(TableCell, {
        size,
        value: entity.values[name],
        align: column.align,
        disabled: true,
        children: /* @__PURE__ */ jsx(PreviewComponent, {
          width: column.width,
          height: column.height,
          name: `preview_${name}_${rowIndex}_${columnIndex}`,
          property,
          value: entity.values[name],
          size: getPreviewSizeFrom(size)
        })
      }, `preview_cell_${name}_${rowIndex}_${columnIndex}`);
    } else {
      const openPopup = (cellRect) => {
        if (!cellRect) {
          setPopupCell(void 0);
        } else {
          setPopupCell({
            columnIndex,
            width: column.width,
            height: column.height,
            entity,
            cellRect,
            name,
            schemaResolver
          });
        }
      };
      const onSelect = (cellRect) => {
        if (!cellRect) {
          select(void 0);
        } else {
          select({
            columnIndex,
            width: column.width,
            height: column.height,
            entity,
            cellRect,
            name,
            schemaResolver
          });
        }
      };
      const selected = selectedCell?.columnIndex === columnIndex && selectedCell?.entity.id === entity.id;
      const isFocused = selected && focused;
      const customFieldValidator2 = uniqueFieldValidator ? ({
        name: name2,
        value,
        property: property2
      }) => uniqueFieldValidator({
        name: name2,
        value,
        property: property2,
        entityId: entity.id
      }) : void 0;
      const validation = mapPropertyToYup({
        property,
        customFieldValidator: customFieldValidator2,
        name
      });
      const onValueChange = onCellValueChange ? (props) => onCellValueChange({
        ...props,
        entity
      }) : void 0;
      return entity ? /* @__PURE__ */ jsx(PropertyTableCell, {
        size,
        align: column.align,
        name,
        validation,
        onValueChange,
        selected,
        focused: isFocused,
        setPreventOutsideClick,
        setFocused,
        value: entity?.values ? entity.values[name] : void 0,
        property,
        openPopup,
        select: onSelect,
        width: column.width,
        height: column.height,
        entityId: entity.id,
        entityValues: entity.values
      }, `table_cell_${name}_${rowIndex}_${columnIndex}`) : /* @__PURE__ */ jsx(SkeletonComponent, {
        property,
        size: getPreviewSizeFrom(size)
      });
    }
  };
  const additionalCellRenderer = ({
    column,
    columnIndex,
    rowData,
    rowIndex
  }) => {
    const entity = rowData;
    const additionalColumn = additionalColumnsMap[column.dataKey];
    const value = additionalColumn.dependencies ? Object.entries(entity.values).filter(([key, value2]) => additionalColumn.dependencies.includes(key)).reduce((a, b) => ({
      ...a,
      ...b
    }), {}) : void 0;
    return /* @__PURE__ */ jsx(TableCell, {
      value,
      focused: false,
      selected: false,
      disabled: true,
      size,
      align: "left",
      allowScroll: false,
      showExpandIcon: false,
      disabledTooltip: "Additional columns can't be edited directly",
      children: /* @__PURE__ */ jsx(ErrorBoundary, {
        children: additionalColumn.builder({
          entity,
          context
        })
      })
    });
  };
  const allColumns = Object.keys(resolvedSchema.properties).map((key) => {
    const property = resolvedSchema.properties[key];
    return {
      key,
      property,
      align: getCellAlignment(property),
      icon: (hoverOrOpen) => getIconForProperty(property, hoverOrOpen ? void 0 : "disabled", "small"),
      label: property.title || key,
      sortable: true,
      filter: buildFilterableFromProperty(property),
      width: getPropertyColumnWidth(property),
      cellRenderer: propertyCellRenderer
    };
  });
  if (additionalColumns) {
    const items = additionalColumns.map((additionalColumn) => {
      const item = {
        key: additionalColumn.id,
        type: "additional",
        align: "left",
        sortable: false,
        label: additionalColumn.title,
        width: additionalColumn.width ?? 200,
        cellRenderer: additionalCellRenderer
      };
      if (additionalColumn.hideInTable) {
        item.property = {
          hideInTable: true
        };
      }
      return item;
    });
    allColumns.push(...items);
  }
  const columns = displayedProperties.map((p) => {
    return allColumns.find((c) => c.key === p);
  }).filter((c) => !!c);
  const customFieldValidator = uniqueFieldValidator ? ({
    name,
    value,
    property
  }) => uniqueFieldValidator({
    name,
    value,
    property,
    entityId: selectedCell?.entity.id
  }) : void 0;
  const popupFormField = /* @__PURE__ */ jsx(PopupFormField, {
    open: Boolean(popupCell),
    onClose: onPopupClose,
    cellRect: popupCell?.cellRect,
    columnIndex: popupCell?.columnIndex,
    name: popupCell?.name,
    schemaResolver: popupCell?.schemaResolver,
    entity: popupCell?.entity,
    tableKey: tableKey.current,
    customFieldValidator,
    path,
    onCellValueChange,
    setPreventOutsideClick
  });
  return {
    columns,
    popupFormField
  };
}

const DEFAULT_PAGE_SIZE = 50;
const useStyles$9 = makeStyles$1((theme) => createStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }
}));
const CollectionTable = React__default.memo(CollectionTableInternal, areEqual);
function areEqual(prevProps, nextProps) {
  return prevProps.path === nextProps.path && prevProps.collection === nextProps.collection && prevProps.title === nextProps.title && prevProps.toolbarActionsBuilder === nextProps.toolbarActionsBuilder && prevProps.tableRowActionsBuilder === nextProps.tableRowActionsBuilder && prevProps.inlineEditing === nextProps.inlineEditing;
}
function CollectionTableInternal({
  path,
  collection,
  schemaResolver,
  inlineEditing,
  toolbarActionsBuilder,
  title,
  tableRowActionsBuilder,
  entitiesDisplayedFirst,
  onEntityClick,
  onColumnResize,
  onSizeChanged,
  hoverRow = true
}) {
  const context = useFireCMSContext();
  const dataSource = useDataSource();
  const sideEntityController = useSideEntityController();
  const theme = useTheme();
  const largeLayout = useMediaQuery(theme.breakpoints.up("md"));
  const [size, setSize] = React__default.useState("xs");
  const initialFilter = collection.initialFilter;
  const initialSort = collection.initialSort;
  const filterCombinations = collection.filterCombinations;
  const textSearchEnabled = collection.textSearchEnabled;
  const paginationEnabled = collection.pagination === void 0 || Boolean(collection.pagination);
  const pageSize = typeof collection.pagination === "number" ? collection.pagination : DEFAULT_PAGE_SIZE;
  const [itemCount, setItemCount] = React__default.useState(paginationEnabled ? pageSize : void 0);
  const [filterValues, setFilterValues] = React__default.useState(initialFilter || {});
  const [sortBy, setSortBy] = React__default.useState(initialSort);
  const filterIsSet = !!filterValues && Object.keys(filterValues).length > 0;
  const classes = useStyles$9();
  const additionalColumns = useMemo(() => {
    const subcollectionColumns = collection.subcollections?.map((subcollection) => {
      return {
        id: getSubcollectionColumnId(subcollection),
        title: subcollection.name,
        width: 200,
        dependencies: [],
        hideInTable: subcollection.hideInTable ?? false,
        builder: ({
          entity
        }) => /* @__PURE__ */ jsx(Button, {
          color: "primary",
          onClick: (event) => {
            event.stopPropagation();
            sideEntityController.open({
              path,
              entityId: entity.id,
              selectedSubpath: subcollection.path,
              permissions: collection.permissions,
              schema: schemaResolver,
              subcollections: collection.subcollections,
              callbacks: collection.callbacks,
              overrideSchemaRegistry: false
            });
          },
          children: (subcollection.buttonContent && subcollection.buttonContent({
            entity
          })) ?? subcollection.name
        })
      };
    }) ?? [];
    return [...collection.additionalColumns ?? [], ...subcollectionColumns];
  }, [collection, path]);
  const resolvedSchema = useMemo(() => schemaResolver({}), []);
  const displayedProperties = useColumnIds(collection, resolvedSchema, true);
  const uniqueFieldValidator = useCallback(({
    name,
    value,
    property,
    entityId
  }) => dataSource.checkUniqueField(path, name, value, property, entityId), [path, dataSource]);
  const onCellChanged = useCallback(({
    value,
    name,
    setSaved,
    setError,
    entity
  }) => {
    const saveProps = {
      path,
      entityId: entity.id,
      values: {
        ...entity.values,
        [name]: value
      },
      previousValues: entity.values,
      schema: schemaResolver,
      status: "existing"
    };
    return saveEntityWithCallbacks({
      ...saveProps,
      callbacks: collection.callbacks,
      dataSource,
      context,
      onSaveSuccess: () => setSaved(true),
      onSaveFailure: (e) => {
        setError(e);
      }
    });
  }, [path, collection, schemaResolver]);
  let {
    columns,
    popupFormField
  } = useBuildColumnsFromSchema({
    schemaResolver,
    additionalColumns,
    displayedProperties,
    path,
    inlineEditing,
    size,
    onCellValueChange: onCellChanged,
    uniqueFieldValidator
  });
  columns = columns.filter((c) => {
    if (c.property) {
      return !c.property.hideInTable;
    } else {
      return true;
    }
  });
  const [searchString, setSearchString] = React__default.useState();
  const {
    data,
    dataLoading,
    noMoreToLoad,
    dataLoadingError
  } = useCollectionFetch({
    entitiesDisplayedFirst,
    path,
    schemaResolver,
    filterValues,
    sortBy,
    searchString,
    itemCount
  });
  const [page, setPage] = useState(1);
  const dataToShow = data.slice(page === 1 ? 0 : (page - 1) * 10);
  const actions = useMemo(() => toolbarActionsBuilder && toolbarActionsBuilder({
    size,
    data: dataToShow
  }), [toolbarActionsBuilder, size, dataToShow]);
  useCallback(() => {
    if (!paginationEnabled || dataLoading || noMoreToLoad)
      return;
    if (itemCount !== void 0)
      setItemCount(itemCount + pageSize);
  }, [dataLoading, itemCount, noMoreToLoad, pageSize, paginationEnabled]);
  const resetPagination = useCallback(() => {
    setItemCount(pageSize);
  }, [pageSize]);
  const clearFilter = useCallback(() => setFilterValues({}), []);
  const buildIdColumn = useCallback(({
    entry,
    size: size2
  }) => {
    if (tableRowActionsBuilder)
      return tableRowActionsBuilder({
        entity: entry,
        size: size2
      });
    else
      return /* @__PURE__ */ jsx(CollectionRowActions, {
        entity: entry,
        size: size2,
        data: dataToShow
      });
  }, [tableRowActionsBuilder]);
  const onRowClick = useCallback(({
    rowData
  }) => {
  }, [onEntityClick]);
  const updateSize = useCallback((size2) => {
    if (onSizeChanged)
      onSizeChanged(size2);
    setSize(size2);
  }, []);
  const handelPrev = () => {
    if (page === 1)
      return;
    const nextPage = page - 1;
    setPage(nextPage);
    setItemCount(nextPage * 10);
  };
  const handelNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setItemCount(nextPage * 10);
  };
  const onTextSearch = useCallback((newSearchString) => setSearchString(newSearchString), []);
  const onSort = () => {
    setPage(1);
    setItemCount(10);
  };
  return /* @__PURE__ */ jsxs(Paper, {
    className: classes.root,
    children: [/* @__PURE__ */ jsx(CollectionTableToolbar, {
      filterIsSet,
      onTextSearch: textSearchEnabled ? onTextSearch : void 0,
      clearFilter,
      actions,
      size,
      onSizeChanged: updateSize,
      title,
      loading: dataLoading
    }), /* @__PURE__ */ jsx(Table, {
      data: dataLoading ? [] : dataToShow,
      columns,
      onRowClick,
      onResetPagination: resetPagination,
      idColumnBuilder: buildIdColumn,
      error: dataLoadingError,
      paginationEnabled,
      onColumnResize,
      frozenIdColumn: largeLayout,
      size,
      loading: dataLoading,
      filter: filterValues,
      onFilterUpdate: setFilterValues,
      sortBy,
      onSortByUpdate: setSortBy,
      hoverRow,
      checkFilterCombination: (filterValues2, sortBy2) => isFilterCombinationValid(filterValues2, filterCombinations, sortBy2),
      collection,
      onSort
    }), /* @__PURE__ */ jsx("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ jsxs(ButtonGroup, {
        disableElevation: true,
        variant: "contained",
        children: [/* @__PURE__ */ jsx(Button, {
          disabled: page === 1 || dataLoading,
          onClick: handelPrev,
          children: /* @__PURE__ */ jsx(ArrowBackIosNewIcon, {})
        }), /* @__PURE__ */ jsx(Button, {
          disabled: noMoreToLoad || dataLoading,
          onClick: handelNext,
          children: /* @__PURE__ */ jsx(ArrowForwardIosIcon, {})
        })]
      })
    })]
  });
}
function isFilterCombinationValid(filterValues, indexes, sortBy) {
  const sortKey = sortBy ? sortBy[0] : void 0;
  const sortDirection = sortBy ? sortBy[1] : void 0;
  const values = Object.values(filterValues);
  if (sortKey && values.map((v) => v[0]).includes("==")) {
    return false;
  }
  const filterKeys = Object.keys(filterValues);
  const filtersCount = filterKeys.length;
  if (filtersCount === 1 && (!sortKey || sortKey === filterKeys[0])) {
    return true;
  }
  if (!indexes && filtersCount > 1) {
    return false;
  }
  if (sortKey && filtersCount === 1 && filterKeys[0] !== sortKey) {
    return false;
  }
  return !!indexes && indexes.filter((compositeIndex) => !sortKey || sortKey in compositeIndex).find((compositeIndex) => Object.entries(filterValues).every(([key, value]) => compositeIndex[key] !== void 0 && (!sortDirection || compositeIndex[key] === sortDirection))) !== void 0;
}

const useStyles$8 = makeStyles((theme) => createStyles({
  dialogBody: {
    flexGrow: 1,
    overflow: "auto",
    minWidth: "85vw"
  },
  paper: {
    height: "100%"
  }
}));
function ReferenceDialog({
  onSingleEntitySelected,
  onMultipleEntitiesSelected,
  onClose,
  open,
  multiselect,
  collectionResolver,
  path,
  selectedEntityIds
}) {
  const classes = useStyles$8();
  const dataSource = useDataSource();
  const collection = collectionResolver;
  const schema = collectionResolver.schema;
  const schemaResolver = collectionResolver.schemaResolver;
  const [selectedEntities, setSelectedEntities] = useState();
  useEffect(() => {
    let unmounted = false;
    if (selectedEntityIds) {
      Promise.all(selectedEntityIds.map((entityId) => {
        return dataSource.fetchEntity({
          path,
          entityId,
          schema: schemaResolver
        });
      })).then((entities) => {
        if (!unmounted)
          setSelectedEntities(entities);
      });
    } else {
      setSelectedEntities([]);
    }
    return () => {
      unmounted = true;
    };
  }, [dataSource, path, selectedEntityIds]);
  const onEntityClick = (entity) => {
    if (!multiselect && onSingleEntitySelected) {
      onSingleEntitySelected(entity);
    } else {
      toggleEntitySelection(entity);
    }
  };
  const onClear = () => {
    if (!multiselect && onSingleEntitySelected) {
      onSingleEntitySelected(null);
    } else if (onMultipleEntitiesSelected) {
      onMultipleEntitiesSelected([]);
    }
  };
  const toggleEntitySelection = (entity) => {
    let newValue;
    if (selectedEntities) {
      if (selectedEntities.map((e) => e.id).indexOf(entity.id) > -1) {
        newValue = selectedEntities.filter((item) => item.id !== entity.id);
      } else {
        newValue = [...selectedEntities, entity];
      }
      setSelectedEntities(newValue);
      if (onMultipleEntitiesSelected)
        onMultipleEntitiesSelected(newValue);
    }
  };
  const tableRowActionsBuilder = ({
    entity,
    size
  }) => {
    const isSelected = selectedEntityIds && selectedEntityIds.indexOf(entity.id) > -1;
    return /* @__PURE__ */ jsx(CollectionRowActions, {
      entity,
      size,
      isSelected,
      selectionEnabled: multiselect,
      toggleEntitySelection
    });
  };
  const toolbarActionsBuilder = () => /* @__PURE__ */ jsx(Button, {
    onClick: onClear,
    color: "primary",
    children: "Clear"
  });
  const title = /* @__PURE__ */ jsx(Typography, {
    variant: "h6",
    children: `Select ${schema.name}`
  });
  return /* @__PURE__ */ jsxs(Dialog, {
    onClose,
    classes: {
      paper: classes.paper
    },
    maxWidth: "xl",
    scroll: "paper",
    open,
    children: [/* @__PURE__ */ jsx("div", {
      className: classes.dialogBody,
      children: selectedEntities && /* @__PURE__ */ jsx(CollectionTable, {
        path,
        collection,
        schemaResolver,
        inlineEditing: false,
        toolbarActionsBuilder,
        onEntityClick,
        tableRowActionsBuilder,
        title,
        entitiesDisplayedFirst: selectedEntities
      })
    }), /* @__PURE__ */ jsx(Divider, {}), /* @__PURE__ */ jsx(DialogActions, {
      children: /* @__PURE__ */ jsx(Button, {
        onClick: (event) => {
          event.stopPropagation();
          onClose();
        },
        color: "primary",
        variant: "contained",
        children: "Close"
      })
    })]
  });
}

function DeleteEntityDialog({
  entityOrEntitiesToDelete,
  schemaResolver,
  onClose,
  open,
  callbacks,
  onEntityDelete,
  onMultipleEntitiesDelete,
  path,
  ...other
}) {
  const dataSource = useDataSource();
  const snackbarContext = useSnackbarController();
  const [loading, setLoading] = useState(false);
  const [entityOrEntities, setUsedEntityOrEntities] = React__default.useState();
  const [multipleEntities, setMultipleEntities] = React__default.useState();
  const context = useFireCMSContext();
  const schema = useMemo(() => schemaResolver({}), []);
  React__default.useEffect(() => {
    if (entityOrEntitiesToDelete) {
      const revisedEntityOrEntities = Array.isArray(entityOrEntitiesToDelete) && entityOrEntitiesToDelete.length === 1 ? entityOrEntitiesToDelete[0] : entityOrEntitiesToDelete;
      setUsedEntityOrEntities(revisedEntityOrEntities);
      setMultipleEntities(Array.isArray(revisedEntityOrEntities));
    }
  }, [entityOrEntitiesToDelete]);
  const handleCancel = useCallback(() => {
    onClose();
  }, [onClose]);
  const onDeleteSuccess = useCallback((entity) => {
    console.debug("Deleted", entity);
  }, []);
  const onDeleteFailure = useCallback((entity, e) => {
    snackbarContext.open({
      type: "error",
      title: `${schema.name}: Error deleting`,
      message: e?.message
    });
    console.error("Error deleting entity");
    console.error(e);
  }, [schema.name]);
  const onPreDeleteHookError = useCallback((entity, e) => {
    snackbarContext.open({
      type: "error",
      title: `${schema.name}: Error before deleting`,
      message: e?.message
    });
    console.error(e);
  }, [schema.name]);
  const onDeleteSuccessHookError = useCallback((entity, e) => {
    snackbarContext.open({
      type: "error",
      title: `${schema.name}: Error after deleting (entity is deleted)`,
      message: e?.message
    });
    console.error(e);
  }, [schema.name]);
  const performDelete = useCallback((entity) => deleteEntityWithCallbacks({
    dataSource,
    entity,
    schema,
    callbacks,
    onDeleteSuccess,
    onDeleteFailure,
    onPreDeleteHookError,
    onDeleteSuccessHookError,
    context
  }), [dataSource, schema, callbacks, onDeleteSuccess, onDeleteFailure, onPreDeleteHookError, onDeleteSuccessHookError, context]);
  const handleOk = useCallback(async () => {
    if (entityOrEntities) {
      setLoading(true);
      if (multipleEntities) {
        Promise.all(entityOrEntities.map(performDelete)).then((results) => {
          setLoading(false);
          if (onMultipleEntitiesDelete && entityOrEntities)
            onMultipleEntitiesDelete(path, entityOrEntities);
          if (results.every(Boolean)) {
            snackbarContext.open({
              type: "success",
              message: `${schema.name}: multiple deleted`
            });
          } else if (results.some(Boolean)) {
            snackbarContext.open({
              type: "warning",
              message: `${schema.name}: Some of the entities have been deleted, but not all`
            });
          } else {
            snackbarContext.open({
              type: "error",
              message: `${schema.name}: Error deleting entities`
            });
          }
          onClose();
        });
      } else {
        performDelete(entityOrEntities).then((success) => {
          setLoading(false);
          if (success) {
            if (onEntityDelete && entityOrEntities)
              onEntityDelete(path, entityOrEntities);
            snackbarContext.open({
              type: "success",
              message: `${schema.name} deleted`
            });
            onClose();
          }
        });
      }
    }
  }, [entityOrEntities, multipleEntities, performDelete, onMultipleEntitiesDelete, path, onClose, snackbarContext, schema.name, onEntityDelete]);
  let content;
  if (entityOrEntities && multipleEntities) {
    content = /* @__PURE__ */ jsx("div", {
      children: "Multiple entities"
    });
  } else {
    const entity = entityOrEntities;
    const resolvedSchema = schemaResolver({
      entityId: entity?.id,
      values: entity?.values
    });
    content = entity ? /* @__PURE__ */ jsx(EntityPreview$1, {
      entity,
      schema: resolvedSchema,
      path
    }) : /* @__PURE__ */ jsx(Fragment, {});
  }
  const dialogTitle = multipleEntities ? `${schema.name}: Confirm multiple delete?` : `Would you like to delete this ${schema.name}?`;
  return /* @__PURE__ */ jsxs(Dialog, {
    maxWidth: "md",
    "aria-labelledby": "delete-dialog",
    open,
    onBackdropClick: onClose,
    ...other,
    children: [/* @__PURE__ */ jsx(DialogTitle, {
      id: "delete-dialog-title",
      children: dialogTitle
    }), !multipleEntities && /* @__PURE__ */ jsx(DialogContent, {
      dividers: true,
      children: content
    }), /* @__PURE__ */ jsxs(DialogActions, {
      children: [loading && /* @__PURE__ */ jsx(CircularProgress, {
        size: 16,
        thickness: 8
      }), /* @__PURE__ */ jsx(Button, {
        onClick: handleCancel,
        disabled: loading,
        color: "primary",
        children: "Cancel"
      }), /* @__PURE__ */ jsx(Button, {
        autoFocus: true,
        disabled: loading,
        onClick: handleOk,
        color: "primary",
        children: "Ok"
      })]
    })]
  });
}

function downloadCSV(data, additionalData, schema, path, exportConfig) {
  const properties = schema.properties;
  const headers = getExportHeaders(properties, path, exportConfig);
  const exportableData = getExportableData(data, additionalData, properties, headers);
  const headersData = entryToCSVRow(headers.map((h) => h.label));
  const csvData = exportableData.map((entry) => entryToCSVRow(entry));
  downloadBlob([headersData, ...csvData], `${schema.name}.csv`, "text/csv");
}
function getExportableData(data, additionalData, properties, headers) {
  const mergedData = data.map((e) => ({
    id: e.id,
    ...processCSVValues(e.values, properties)
  }));
  if (additionalData) {
    additionalData.forEach((additional, index) => {
      mergedData[index] = {
        ...mergedData[index],
        ...additional
      };
    });
  }
  return mergedData && mergedData.map((entry) => {
    return headers.map((header) => getValueInPath(entry, header.key));
  });
}
function getExportHeaders(properties, path, exportConfig) {
  const headers = [{
    label: "id",
    key: "id"
  }, ...Object.entries(properties).map(([childKey, property]) => getHeaders(property, childKey, "")).flat()];
  if (exportConfig?.additionalColumns) {
    headers.push(...exportConfig.additionalColumns.map((column) => ({
      label: column.key,
      key: column.key
    })));
  }
  return headers;
}
function getHeaders(property, propertyKey, prefix = "") {
  const currentKey = prefix ? `${prefix}.${propertyKey}` : propertyKey;
  if (property.dataType === "map" && property.properties) {
    return Object.entries(property.properties).map(([childKey, p]) => getHeaders(p, childKey, currentKey)).flat();
  } else {
    return [{
      label: currentKey,
      key: currentKey
    }];
  }
}
function processCSVValue(inputValue, property) {
  let value;
  if (property.dataType === "map" && property.properties) {
    value = processCSVValues(inputValue, property.properties);
  } else if (property.dataType === "array") {
    if (property.of && Array.isArray(inputValue)) {
      if (property.of.dataType === "map") {
        value = inputValue.map((e) => JSON.stringify(e));
      } else {
        value = inputValue.map((e) => processCSVValue(e, property.of));
      }
    } else {
      value = inputValue;
    }
  } else if (property.dataType === "reference") {
    const ref = inputValue ? inputValue : void 0;
    value = ref ? ref.pathWithId : null;
  } else if (property.dataType === "timestamp") {
    value = inputValue ? inputValue.getTime() : null;
  } else {
    value = inputValue;
  }
  return value;
}
function processCSVValues(inputValues, properties) {
  const updatedValues = Object.entries(properties).map(([key, property]) => {
    const inputValue = inputValues && inputValues[key];
    const updatedValue = processCSVValue(inputValue, property);
    if (updatedValue === void 0)
      return {};
    return {
      [key]: updatedValue
    };
  }).reduce((a, b) => ({
    ...a,
    ...b
  }), {});
  return {
    ...inputValues,
    ...updatedValues
  };
}
function entryToCSVRow(entry) {
  return entry.map((v) => {
    if (v === null || v === void 0)
      return "";
    const s = String(v);
    return '"' + s.replaceAll('"', '""') + '"';
  }).join(",") + "\r\n";
}
function downloadBlob(content, filename, contentType) {
  const blob = new Blob(content, {
    type: contentType
  });
  const url = URL.createObjectURL(blob);
  const pom = document.createElement("a");
  pom.href = url;
  pom.setAttribute("download", filename);
  pom.click();
}

const INITIAL_DOCUMENTS_LIMIT = 200;
function ExportButton({
  schema,
  schemaResolver,
  path,
  exportConfig
}) {
  const dataSource = useDataSource();
  const context = useFireCMSContext();
  const dataRef = useRef();
  const additionalDataRef = useRef();
  const [dataLoading, setDataLoading] = React__default.useState(false);
  const [dataLoadingError, setDataLoadingError] = React__default.useState();
  const [hasLargeAmountOfData, setHasLargeAmountOfData] = React__default.useState(false);
  const [fetchLargeDataAccepted, setFetchLargeDataAccepted] = React__default.useState(false);
  const [open, setOpen] = React__default.useState(false);
  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  const doDownload = useCallback((data, additionalData, schema2, schemaResolver2, path2, exportConfig2) => {
    if (!data)
      throw Error("Trying to perform export without loading data first");
    const resolvedSchema = schemaResolver2({});
    downloadCSV(data, additionalData, resolvedSchema, path2, exportConfig2);
  }, []);
  useEffect(() => {
    if (!open)
      return;
    setDataLoading(true);
    const updateEntities = async (entities) => {
      if (entities.length >= INITIAL_DOCUMENTS_LIMIT) {
        setHasLargeAmountOfData(true);
      }
      const pendingDownload = dataRef.current && entities.length > dataRef.current.length && fetchLargeDataAccepted;
      dataRef.current = entities;
      const additionalColumnsData = await fetchAdditionalColumns(entities);
      additionalDataRef.current = additionalColumnsData;
      setDataLoading(false);
      setDataLoadingError(void 0);
      if (pendingDownload) {
        doDownload(entities, additionalColumnsData, schema, schemaResolver, path, exportConfig);
        handleClose();
      }
    };
    const fetchAdditionalColumns = async (entities) => {
      if (!exportConfig?.additionalColumns) {
        return;
      }
      const additionalColumns = exportConfig.additionalColumns;
      const resolvedColumnsValues = await Promise.all(entities.map(async (entity) => {
        return (await Promise.all(additionalColumns.map(async (column) => {
          return {
            [column.key]: await column.builder({
              entity,
              context
            })
          };
        }))).reduce((a, b) => ({
          ...a,
          ...b
        }), {});
      }));
      return resolvedColumnsValues;
    };
    const onFetchError = (error) => {
      console.error("ERROR", error);
      setDataLoading(false);
      setDataLoadingError(error);
    };
    dataSource.fetchCollection({
      path,
      schema: schemaResolver,
      limit: fetchLargeDataAccepted ? void 0 : INITIAL_DOCUMENTS_LIMIT
    }).then(updateEntities).catch(onFetchError);
  }, [path, fetchLargeDataAccepted, schema, open, dataSource, schemaResolver, doDownload, exportConfig, handleClose, context]);
  const needsToAcceptFetchAllData = hasLargeAmountOfData && !fetchLargeDataAccepted;
  const onOkClicked = useCallback(() => {
    if (needsToAcceptFetchAllData) {
      setFetchLargeDataAccepted(true);
    } else {
      doDownload(dataRef.current, additionalDataRef.current, schema, schemaResolver, path, exportConfig);
      handleClose();
    }
  }, [needsToAcceptFetchAllData, doDownload, schema, schemaResolver, path, exportConfig, handleClose]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Tooltip, {
      title: "Export",
      children: /* @__PURE__ */ jsx(IconButton, {
        color: "primary",
        onClick: handleClickOpen,
        size: "large",
        children: /* @__PURE__ */ jsx(Upload, {})
      })
    }), /* @__PURE__ */ jsxs(Dialog, {
      open,
      onClose: handleClose,
      children: [/* @__PURE__ */ jsx(DialogTitle, {
        children: "Export data"
      }), /* @__PURE__ */ jsx(DialogContent, {
        children: /* @__PURE__ */ jsxs(DialogContentText, {
          children: [/* @__PURE__ */ jsx("div", {
            children: "Download the the content of this table as a CSV"
          }), /* @__PURE__ */ jsx("br", {}), needsToAcceptFetchAllData && /* @__PURE__ */ jsxs(Alert, {
            elevation: 1,
            variant: "filled",
            severity: "warning",
            children: [/* @__PURE__ */ jsxs("div", {
              children: ["This collections has a large number of documents (more than ", INITIAL_DOCUMENTS_LIMIT, ")."]
            }), /* @__PURE__ */ jsx("div", {
              children: "Would you like to proceed?"
            })]
          })]
        })
      }), /* @__PURE__ */ jsxs(DialogActions, {
        children: [dataLoading && /* @__PURE__ */ jsx(CircularProgress, {
          size: 16,
          thickness: 8
        }), /* @__PURE__ */ jsx(Button, {
          color: "primary",
          onClick: handleClose,
          children: "Cancel"
        }), /* @__PURE__ */ jsx(Button, {
          color: "primary",
          disabled: dataLoading,
          onClick: onOkClicked,
          children: "Download"
        })]
      })]
    })]
  });
}

const DEFAULT_PERMISSIONS = {
  edit: true,
  create: true,
  delete: true
};
function checkHasPermissionOnEntity(permission, entity, authController, path, context) {
  if (permission === void 0) {
    return DEFAULT_PERMISSIONS;
  } else if (typeof permission === "object") {
    return permission;
  } else if (typeof permission === "function") {
    return permission({
      user: authController.user,
      authController,
      entity,
      path,
      context
    });
  }
  throw Error("New type of HasPermission added and not mapped");
}
function canEdit(permission, entity, authController, path, context) {
  return checkHasPermissionOnEntity(permission, entity, authController, path, context).edit ?? DEFAULT_PERMISSIONS.edit;
}
function canCreate(permission, authController, path, context) {
  return checkHasPermissionOnEntity(permission, null, authController, path, context).create ?? DEFAULT_PERMISSIONS.create;
}
function canDelete(permission, entity, authController, path, context) {
  return checkHasPermissionOnEntity(permission, entity, authController, path, context).delete ?? DEFAULT_PERMISSIONS.delete;
}

function useSelectionController(collection) {
  const [selectedEntities, setSelectedEntities] = useState([]);
  let collectionData = useCollectionFetch({
    path: collection.path,
    schemaResolver: collection.schemaResolver
  });
  collectionData = useCollectionFetch({
    path: collection.path,
    schemaResolver: collection.schemaResolver
  });
  const toggleEntitySelection = useCallback((entity) => {
    let newValue;
    if (selectedEntities.map((e) => e.id).includes(entity.id)) {
      newValue = selectedEntities.filter((item) => item.id !== entity.id);
    } else {
      newValue = [...selectedEntities, entity];
    }
    setSelectedEntities(newValue);
  }, [selectedEntities]);
  const selectAll = useCallback((d) => {
    if (selectedEntities.length === collectionData.data.length && selectedEntities.length !== 0) {
      setSelectedEntities([]);
    } else {
      if (collectionData.data) {
        const new1 = collectionData.data;
        setSelectedEntities(new1);
      }
    }
  }, [selectedEntities]);
  const isEntitySelected = useCallback((entity) => selectedEntities.map((e) => e.id).includes(entity.id), [selectedEntities]);
  const isAllEntitiesSelected = useCallback(() => selectedEntities.length === collectionData.data.length && selectedEntities.length !== 0, [selectedEntities, collectionData]);
  return {
    selectedEntities,
    setSelectedEntities,
    isEntitySelected,
    isAllEntitiesSelected,
    toggleEntitySelection,
    selectAll
  };
}
function EntityCollectionView$1({
  path,
  collection: baseCollection
}) {
  const sideEntityController = useSideEntityController();
  const context = useFireCMSContext();
  const authController = useAuthController();
  const navigationContext = useNavigation();
  const theme = useTheme();
  const largeLayout = useMediaQuery(theme.breakpoints.up("md"));
  const [deleteEntityClicked, setDeleteEntityClicked] = React__default.useState(void 0);
  const collectionResolver = navigationContext.getCollectionResolver(path);
  if (!collectionResolver) {
    throw Error(`Couldn't find the corresponding collection view for the path: ${path}`);
  }
  const onCollectionModifiedForUser = useCallback((partialCollection) => {
    navigationContext.onCollectionModifiedForUser(path, partialCollection);
  }, [path]);
  const collection = collectionResolver ?? baseCollection;
  const {
    schemaResolver
  } = collectionResolver;
  const exportable = collection.exportable === void 0 || collection.exportable;
  const selectionEnabled = collection.selectionEnabled === void 0 || collection.selectionEnabled;
  const hoverRow = collection.inlineEditing !== void 0 && !collection.inlineEditing;
  const [anchorEl, setAnchorEl] = React__default.useState(null);
  const selectionController = useSelectionController(collection);
  const usedSelectionController = collection.selectionController ?? selectionController;
  const {
    selectedEntities,
    toggleEntitySelection,
    selectAll,
    isAllEntitiesSelected,
    isEntitySelected,
    setSelectedEntities,
    collectionData
  } = usedSelectionController;
  useEffect(() => {
    setDeleteEntityClicked(void 0);
  }, [selectedEntities]);
  const onEntityClick = useCallback((entity) => {
    return sideEntityController.open({
      entityId: entity.id,
      path,
      permissions: collection.permissions,
      schema: collection.schema,
      subcollections: collection.subcollections,
      callbacks: collection.callbacks,
      overrideSchemaRegistry: false
    });
  }, [path, collection, sideEntityController]);
  const onNewClick = useCallback((e) => {
    e.stopPropagation();
    return sideEntityController.open({
      path,
      permissions: collection.permissions,
      schema: collection.schema,
      subcollections: collection.subcollections,
      callbacks: collection.callbacks,
      overrideSchemaRegistry: false
    });
  }, [path, collection, sideEntityController]);
  const internalOnEntityDelete = useCallback((_path, entity) => {
    setSelectedEntities(selectedEntities.filter((e) => e.id !== entity.id));
  }, [selectedEntities, setSelectedEntities]);
  const internalOnMultipleEntitiesDelete = useCallback((_path, entities) => {
    setSelectedEntities([]);
    setDeleteEntityClicked(void 0);
  }, [setSelectedEntities]);
  const checkInlineEditing = useCallback((entity) => {
    if (!canEdit(collection.permissions, entity, authController, path, context)) {
      return false;
    }
    return collection.inlineEditing === void 0 || collection.inlineEditing;
  }, [collection.inlineEditing, collection.permissions, path]);
  const onColumnResize = useCallback(({
    width,
    key
  }) => {
    if (!collection.schema.properties[key])
      return;
    const property = {
      columnWidth: width
    };
    const updatedFields = {
      schema: {
        properties: {
          [key]: property
        }
      }
    };
    if (onCollectionModifiedForUser)
      onCollectionModifiedForUser(updatedFields);
  }, [collection.schema.properties, onCollectionModifiedForUser]);
  const onSizeChanged = useCallback((size) => {
    if (onCollectionModifiedForUser)
      onCollectionModifiedForUser({
        defaultSize: "xs"
      });
  }, [onCollectionModifiedForUser]);
  const open = anchorEl != null;
  const title = useMemo(() => /* @__PURE__ */ jsxs("div", {
    style: {
      padding: "4px"
    },
    children: [/* @__PURE__ */ jsx(Typography, {
      variant: "h6",
      style: {
        lineHeight: "1.0",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: "fit-content",
        cursor: collection.description ? "pointer" : "inherit"
      },
      onClick: collection.description ? (e) => {
        setAnchorEl(e.currentTarget);
        e.stopPropagation();
      } : void 0,
      children: `${collection.name}`
    }), /* @__PURE__ */ jsx(Typography, {
      style: {
        display: "block",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: "160px",
        direction: "rtl",
        textAlign: "left"
      },
      variant: "caption",
      color: "textSecondary",
      children: `/${path}`
    }), collection.description && /* @__PURE__ */ jsx(Popover, {
      id: "info-dialog",
      open,
      anchorEl,
      elevation: 1,
      onClose: () => {
        setAnchorEl(null);
      },
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      },
      children: /* @__PURE__ */ jsx(Box, {
        m: 2,
        children: /* @__PURE__ */ jsx(Markdown, {
          source: collection.description
        })
      })
    })]
  }), [collection.description, collection.name, path, open, anchorEl]);
  const tableRowActionsBuilder = useCallback(({
    entity,
    size
  }) => {
    const isSelected = isEntitySelected(entity);
    const isAllSelected = isAllEntitiesSelected();
    const createEnabled = canCreate(collection.permissions, authController, path, context);
    const editEnabled = canEdit(collection.permissions, entity, authController, path, context);
    const deleteEnabled = canDelete(collection.permissions, entity, authController, path, context);
    const onCopyClicked = (clickedEntity) => sideEntityController.open({
      entityId: clickedEntity.id,
      path,
      copy: true,
      permissions: {
        edit: editEnabled,
        create: createEnabled,
        delete: deleteEnabled
      },
      schema: collection.schema,
      subcollections: collection.subcollections,
      callbacks: collection.callbacks,
      overrideSchemaRegistry: false
    });
    const onEditClicked = (clickedEntity) => sideEntityController.open({
      entityId: clickedEntity.id,
      path,
      permissions: {
        edit: editEnabled,
        create: createEnabled,
        delete: deleteEnabled
      },
      schema: collection.schema,
      subcollections: collection.subcollections,
      callbacks: collection.callbacks,
      overrideSchemaRegistry: false
    });
    return /* @__PURE__ */ jsx(CollectionRowActions, {
      entity,
      isSelected,
      isAllSelected,
      selectionEnabled,
      size,
      toggleEntitySelection,
      selectAll,
      onEditClicked,
      onCopyClicked: createEnabled ? onCopyClicked : void 0,
      onDeleteClicked: deleteEnabled ? setDeleteEntityClicked : void 0
    });
  }, [usedSelectionController, sideEntityController, collection.permissions, authController, path]);
  const toolbarActionsBuilder = useCallback((_) => {
    const addButton = canCreate(collection.permissions, authController, path, context) && onNewClick && (largeLayout ? /* @__PURE__ */ jsxs(Button, {
      onClick: onNewClick,
      startIcon: /* @__PURE__ */ jsx(Add, {}),
      size: "large",
      variant: "contained",
      color: "primary",
      children: ["Add ", collection.schema.name]
    }) : /* @__PURE__ */ jsx(Button, {
      onClick: onNewClick,
      size: "medium",
      variant: "contained",
      color: "primary",
      children: /* @__PURE__ */ jsx(Add, {})
    }));
    selectedEntities.every((entity) => canDelete(collection.permissions, entity, authController, path, context));
    const extraActions = collection.extraActions ? collection.extraActions({
      path,
      collection,
      selectionController: usedSelectionController,
      context
    }) : void 0;
    const exportButton = exportable && /* @__PURE__ */ jsx(ExportButton, {
      schema: collection.schema,
      schemaResolver,
      exportConfig: typeof collection.exportable === "object" ? collection.exportable : void 0,
      path
    });
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [extraActions, exportButton, collection.disableCreate ? /* @__PURE__ */ jsx(Fragment, {}) : addButton]
    });
  }, [usedSelectionController, path, collection, largeLayout]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(CollectionTable, {
      title,
      path,
      collection,
      schemaResolver,
      onSizeChanged,
      inlineEditing: checkInlineEditing,
      onEntityClick,
      onColumnResize,
      tableRowActionsBuilder,
      toolbarActionsBuilder,
      hoverRow
    }, `collection_table_${path}`), deleteEntityClicked && /* @__PURE__ */ jsx(DeleteEntityDialog, {
      entityOrEntitiesToDelete: deleteEntityClicked,
      path,
      schema: collection.schema,
      schemaResolver,
      callbacks: collection.callbacks,
      open: !!deleteEntityClicked,
      onEntityDelete: internalOnEntityDelete,
      onMultipleEntitiesDelete: internalOnMultipleEntitiesDelete,
      onClose: () => setDeleteEntityClicked(void 0)
    })]
  });
}

var EntityCollectionView$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    useSelectionController: useSelectionController,
    EntityCollectionView: EntityCollectionView$1,
    'default': EntityCollectionView$1
}, Symbol.toStringTag, { value: 'Module' }));

function CircularProgressCenter(props) {
  return /* @__PURE__ */ jsx(Box, {
    display: "flex",
    width: "100%",
    maxHeight: "100%",
    height: "100vh",
    children: /* @__PURE__ */ jsx(Box, {
      m: "auto",
      children: /* @__PURE__ */ jsx(CircularProgress, {
        ...props
      })
    })
  });
}

const useStyles$7 = makeStyles((theme) => createStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minHeight: 248
  },
  flexGrow: {
    flexGrow: 1
  }
}));
function FireCMSHomePage() {
  const classes = useStyles$7();
  const navigationContext = useNavigation();
  if (!navigationContext.navigation)
    return /* @__PURE__ */ jsx(Fragment, {});
  const {
    navigationEntries,
    groups
  } = computeTopNavigation(navigationContext, false);
  const allGroups = [...groups];
  if (navigationEntries.filter((e) => !e.group).length > 0) {
    allGroups.push(null);
  }
  function buildNavigationCard(entry) {
    return /* @__PURE__ */ jsx(Grid, {
      item: true,
      xs: 12,
      sm: 6,
      md: 4,
      children: /* @__PURE__ */ jsx(Paper, {
        variant: "outlined",
        children: /* @__PURE__ */ jsxs(CardActionArea, {
          className: classes.card,
          component: Link$1,
          to: entry.url,
          children: [/* @__PURE__ */ jsxs(CardContent, {
            className: classes.flexGrow,
            children: [/* @__PURE__ */ jsx(PlaylistPlayIcon, {
              color: "disabled"
            }), /* @__PURE__ */ jsx(Typography, {
              gutterBottom: true,
              variant: "h5",
              component: "h2",
              children: entry.name
            }), entry.description && /* @__PURE__ */ jsx(Typography, {
              variant: "body2",
              color: "textSecondary",
              component: "div",
              children: /* @__PURE__ */ jsx(Markdown, {
                source: entry.description
              })
            })]
          }), /* @__PURE__ */ jsx(CardActions, {
            style: {
              alignSelf: "flex-end"
            },
            children: /* @__PURE__ */ jsx(Box, {
              p: 1,
              children: /* @__PURE__ */ jsx(ArrowForwardIcon, {
                color: "primary"
              })
            })
          })]
        })
      })
    }, `nav_${entry.group}_${entry.name}`);
  }
  return /* @__PURE__ */ jsx(Container, {
    children: allGroups.map((group, index) => /* @__PURE__ */ jsxs(Box, {
      mt: 6,
      mb: 6,
      children: [allGroups.length > 0 && /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(Typography, {
          color: "textSecondary",
          className: "weight-500",
          children: group?.toUpperCase() ?? "Collections".toUpperCase()
        }), /* @__PURE__ */ jsx(Divider, {})]
      }), /* @__PURE__ */ jsx(Box, {
        mt: 2,
        children: /* @__PURE__ */ jsxs(Grid, {
          container: true,
          spacing: 2,
          children: [group && navigationEntries.filter((entry) => entry.group === group).map((entry) => buildNavigationCard(entry)), !group && navigationEntries.filter((entry) => !entry.group).map((entry) => buildNavigationCard(entry))]
        })
      })]
    }, `group_${index}`))
  });
}

const baseTableCss = {
  name: "1oajfbb",
  styles: "& .BaseTable{box-shadow:0 2px 4px 0 rgba(128, 128, 128, 0.2);contain:strict;position:relative;box-sizing:border-box;font-size:13px;}& .BaseTable--disabled{opacity:0.7;pointer-events:none;}& .BaseTable--dynamic .BaseTable__row{overflow:hidden;align-items:stretch;}& .BaseTable:not(.BaseTable--dynamic) .BaseTable__row-cell-text,& .BaseTable .BaseTable__row--frozen .BaseTable__row-cell-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}& .BaseTable__table{position:absolute;top:0;display:flex;flex-direction:column-reverse;}& .BaseTable__table-main{outline:1px solid rgba(128, 128, 128, 0.1);left:0;}& .BaseTable__table-main .BaseTable__header-cell:first-of-type,.BaseTable__table-main .BaseTable__row-cell:first-of-type{padding:0;}& .BaseTable__table-frozen-left .BaseTable__body{backdrop-filter:blur(4px);}& .BaseTable__table-frozen-left .BaseTable__header,& .BaseTable__table-frozen-left .BaseTable__body,.BaseTable__table-frozen-right .BaseTable__header,& .BaseTable__table-frozen-right .BaseTable__body{overflow:hidden!important;}& .BaseTable__table-frozen-left{box-shadow:2px 0 4px 0 rgba(128, 128, 128, 0.1);top:0;left:0;}& .BaseTable__table-frozen-left .BaseTable__header-cell:first-of-type,.BaseTable__table-frozen-left .BaseTable__row-cell:first-of-type{padding:0;}& .BaseTable__table-frozen-left .BaseTable__header-row,& .BaseTable__table-frozen-left .BaseTable__row{padding-right:0!important;}& .BaseTable__table-frozen-left .BaseTable__body{overflow-y:auto!important;}& .BaseTable__table-frozen-right{box-shadow:-2px 0 4px 0 rgba(128, 128, 128, 0.3);top:0;right:0;}& .BaseTable__table-frozen-right .BaseTable__header-cell:last-child,.BaseTable__table-frozen-right .BaseTable__row-cell:last-child{padding-right:15px;}& .BaseTable__table-frozen-right .BaseTable__header-row,& .BaseTable__table-frozen-right .BaseTable__row{padding-left:0!important;}& .BaseTable__table-frozen-right .BaseTable__body{overflow-y:auto!important;}& .BaseTable__header{overflow:hidden!important;}& .BaseTable .BaseTable__header,& .BaseTable .BaseTable__body{outline:none;}& .BaseTable__header-row,.BaseTable__row{display:flex;align-items:center;border-bottom:1px solid rgba(128, 128, 128, 0.1);box-sizing:border-box;}& .BaseTable__header-row{font-weight:700;}& .BaseTable__row{}& .BaseTable__row:hover,.BaseTable__row--hovered{}& .BaseTable__row-expanded{}& .BaseTable__header-cell,.BaseTable__row-cell{min-width:0;height:100%;display:flex;align-items:center;padding:0 7.5px;box-sizing:border-box;}& .BaseTable__header-cell--align-center,.BaseTable__row-cell--align-center{justify-content:center;text-align:center;}& .BaseTable__header-cell--align-right,.BaseTable__row-cell--align-right{justify-content:flex-end;text-align:right;}& .BaseTable__header-cell{position:relative;cursor:default;}& .BaseTable__header-cell:hover .BaseTable__column-resizer{visibility:visible;opacity:0.5;}& .BaseTable__header-cell:hover .BaseTable__column-resizer:hover{opacity:1;}& .BaseTable__header-cell .BaseTable__sort-indicator{display:none;}& .BaseTable__header-cell--sortable:hover{background-color:#f3f3f3;cursor:pointer;}& .BaseTable__header-cell--sortable:not(.BaseTable__header-cell--sorting):hover .BaseTable__sort-indicator{display:block;color:#888888;}& .BaseTable__header-cell--sorting .BaseTable__sort-indicator,.BaseTable__header-cell--sorting:hover .BaseTable__sort-indicator{display:block;}& .BaseTable__header-cell--resizing .BaseTable__column-resizer{visibility:visible;opacity:1;}& .BaseTable__header-cell--resizing .BaseTable__column-resizer::after{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden;content:'';left:-9999px;}& .BaseTable__header-cell-text{overflow:hidden;text-overflow:ellipsis;white-space:normal;}& .BaseTable__header-row--resizing .BaseTable__header-cell{background-color:transparent;cursor:col-resize;}& .BaseTable__header-row--resizing .BaseTable__header-cell:not(.BaseTable__header-cell--sorting) .BaseTable__sort-indicator{display:none;}& .BaseTable__header-row--resizing .BaseTable__header-cell:not(.BaseTable__header-cell--resizing) .BaseTable__column-resizer{visibility:hidden;}& .BaseTable__column-resizer{width:3px;visibility:hidden;background-color:#cccccc;}& .BaseTable__column-resizer:hover{visibility:visible;opacity:1;}& .BaseTable__footer{position:absolute;left:0;right:0;bottom:0;overflow:hidden;background-color:#ffffff;}& .BaseTable__resizing-line{cursor:col-resize;position:absolute;top:0;background-color:#cccccc;width:3px;transform:translateX(-100%);}& .BaseTable__empty-layer{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden;}& .BaseTable__overlay{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden;pointer-events:none;}& .BaseTable__overlay>*{pointer-events:auto;}"
} ;

const operationLabels$1 = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "in",
  "array-contains": "Contains",
  "array-contains-any": "Any"
};
const multipleSelectOperations$1 = ["array-contains-any", "in"];
function StringNumberFilterField({
  name,
  value,
  setValue,
  dataType,
  isArray,
  enumValues,
  title
}) {
  const possibleOperations = isArray ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="];
  if (enumValues)
    isArray ? possibleOperations.push("array-contains-any") : possibleOperations.push("in");
  const [fieldOperation, fieldValue] = value || [possibleOperations[0], void 0];
  const [operation, setOperation] = useState(fieldOperation);
  const [internalValue, setInternalValue] = useState(fieldValue);
  function updateFilter(op, val) {
    let newValue = val;
    const prevOpIsArray = multipleSelectOperations$1.includes(operation);
    const newOpIsArray = multipleSelectOperations$1.includes(op);
    if (prevOpIsArray !== newOpIsArray) {
      newValue = newOpIsArray ? typeof val === "string" || typeof val === "number" ? [val] : [] : "";
    }
    if (typeof newValue === "number" && isNaN(newValue))
      newValue = void 0;
    setOperation(op);
    setInternalValue(newValue);
    const hasNewValue = newValue !== null && Array.isArray(newValue) ? newValue.length > 0 : newValue !== void 0;
    if (op && hasNewValue) {
      setValue([op, newValue]);
    } else {
      setValue(void 0);
    }
  }
  const multiple = multipleSelectOperations$1.includes(operation);
  return /* @__PURE__ */ jsxs(Box, {
    display: "flex",
    width: 340,
    alignItems: "center",
    children: [/* @__PURE__ */ jsx(Box, {
      width: 80,
      children: /* @__PURE__ */ jsx(FormControl, {
        fullWidth: true,
        children: /* @__PURE__ */ jsx(Select$1, {
          value: operation,
          fullWidth: true,
          onChange: (evt) => {
            updateFilter(evt.target.value, internalValue);
          },
          children: possibleOperations.map((op) => /* @__PURE__ */ jsx(MenuItem, {
            value: op,
            children: operationLabels$1[op]
          }, `filter_op_${name}_${op}`))
        })
      })
    }), /* @__PURE__ */ jsx(Box, {
      flexGrow: 1,
      ml: 1,
      children: /* @__PURE__ */ jsxs(FormControl, {
        fullWidth: true,
        children: [!enumValues && /* @__PURE__ */ jsx(OutlinedInput, {
          fullWidth: true,
          type: dataType === "number" ? "number" : void 0,
          value: internalValue !== void 0 ? internalValue : "",
          onChange: (evt) => {
            const val = dataType === "number" ? parseFloat(evt.target.value) : evt.target.value;
            updateFilter(operation, val);
          }
        }, `filter_${name}`), enumValues && /* @__PURE__ */ jsx(Select$1, {
          fullWidth: true,
          multiple,
          value: internalValue !== void 0 ? internalValue : isArray ? [] : "",
          onChange: (evt) => updateFilter(operation, dataType === "number" ? parseInt(evt.target.value) : evt.target.value),
          renderValue: multiple ? (selected) => /* @__PURE__ */ jsx("div", {
            children: selected.map((enumKey) => {
              return /* @__PURE__ */ jsx(EnumValuesChip, {
                enumKey,
                enumValues,
                small: true
              }, `select_value_${name}_${enumKey}`);
            })
          }) : void 0,
          children: Object.entries(enumValues).map(([enumKey, labelOrConfig]) => {
            return /* @__PURE__ */ jsx(MenuItem, {
              value: enumKey,
              children: /* @__PURE__ */ jsx(EnumValuesChip, {
                enumKey,
                enumValues,
                small: true
              })
            }, `select_${name}_${enumKey}`);
          })
        }, `filter-select-${multiple}-${name}`)]
      })
    }), internalValue !== void 0 && /* @__PURE__ */ jsx(Box, {
      ml: 1,
      children: /* @__PURE__ */ jsx(IconButton, {
        onClick: (e) => updateFilter(operation, void 0),
        size: "small",
        children: /* @__PURE__ */ jsx(Tooltip$1, {
          title: `Clear ${title}`,
          children: /* @__PURE__ */ jsx(ClearIcon, {
            fontSize: "small"
          })
        })
      })
    })]
  });
}

const useStyles$6 = makeStyles((theme) => createStyles({
  formControl: {
    width: "200px"
  },
  label: {
    width: "100%",
    height: "100%"
  }
}));
function BooleanFilterField({
  name,
  title,
  value,
  setValue
}) {
  const classes = useStyles$6();
  function updateFilter(val) {
    if (val !== void 0) {
      setValue(["==", val]);
    } else {
      setValue(void 0);
    }
  }
  const valueSetToTrue = value && value[1];
  const valueSet = !!value;
  return /* @__PURE__ */ jsx(FormControlLabel, {
    className: classes.formControl,
    labelPlacement: "end",
    checked: valueSet && valueSetToTrue,
    control: /* @__PURE__ */ jsx(Checkbox, {
      indeterminate: !valueSet,
      onChange: (evt) => {
        if (valueSetToTrue) {
          updateFilter(false);
        } else if (!valueSet) {
          updateFilter(true);
        } else {
          updateFilter(void 0);
        }
      }
    }, `filter-${name}`),
    label: !valueSet ? "No filter" : valueSetToTrue ? `${title} is true` : `${title} is false`
  });
}

const operationLabels = {
  "==": "==",
  "!=": "!=",
  ">": ">",
  "<": "<",
  ">=": ">=",
  "<=": "<=",
  in: "in",
  "array-contains": "Contains",
  "array-contains-any": "Any"
};
const multipleSelectOperations = ["array-contains-any", "in"];
function DateTimeFilterField({
  name,
  isArray,
  value,
  setValue,
  title
}) {
  const possibleOperations = isArray ? ["array-contains"] : ["==", "!=", ">", "<", ">=", "<="];
  const [fieldOperation, fieldValue] = value || [possibleOperations[0], void 0];
  const [operation, setOperation] = useState(fieldOperation);
  const [internalValue, setInternalValue] = useState(fieldValue);
  function updateFilter(op, val) {
    let newValue = val;
    const prevOpIsArray = multipleSelectOperations.includes(operation);
    const newOpIsArray = multipleSelectOperations.includes(op);
    if (prevOpIsArray !== newOpIsArray) {
      newValue = newOpIsArray ? val ? [val] : [] : "";
    }
    setOperation(op);
    setInternalValue(newValue === null ? void 0 : newValue);
    const hasNewValue = newValue !== null && Array.isArray(newValue) ? newValue.length > 0 : newValue !== void 0;
    if (op && hasNewValue) {
      setValue([op, newValue]);
    } else {
      setValue(void 0);
    }
  }
  return /* @__PURE__ */ jsxs(Box, {
    display: "flex",
    width: 340,
    alignItems: "center",
    children: [/* @__PURE__ */ jsx(Box, {
      width: 80,
      children: /* @__PURE__ */ jsx(FormControl, {
        fullWidth: true,
        children: /* @__PURE__ */ jsx(Select$1, {
          value: operation,
          fullWidth: true,
          onChange: (evt) => {
            updateFilter(evt.target.value, internalValue);
          },
          children: possibleOperations.map((op) => /* @__PURE__ */ jsx(MenuItem, {
            value: op,
            children: operationLabels[op]
          }, `filter_op_${name}_${op}`))
        })
      })
    }), /* @__PURE__ */ jsx(Box, {
      flexGrow: 1,
      ml: 1,
      children: /* @__PURE__ */ jsx(DateTimePicker, {
        clearable: true,
        InputProps: {},
        renderInput: (props) => /* @__PURE__ */ jsx(Input, {
          startAdornment: /* @__PURE__ */ jsx(CalendarTodayIcon, {
            fontSize: "small"
          })
        }),
        value: internalValue ?? null,
        onChange: (dateValue) => {
          updateFilter(operation, dateValue === null ? void 0 : dateValue);
        }
      })
    }), internalValue !== void 0 && /* @__PURE__ */ jsx(Box, {
      ml: 1,
      children: /* @__PURE__ */ jsx(IconButton, {
        onClick: (e) => updateFilter(operation, void 0),
        size: "small",
        children: /* @__PURE__ */ jsx(Tooltip$1, {
          title: `Clear ${title}`,
          children: /* @__PURE__ */ jsx(ClearIcon, {
            fontSize: "small"
          })
        })
      })
    })]
  });
}

const useStyles$5 = makeStyles((theme) => createStyles({
  header: ({
    onHover
  }) => ({
    width: "calc(100% + 24px)",
    margin: "0px -12px",
    padding: "0px 12px",
    color: onHover ? theme.palette.text.primary : theme.palette.text.secondary,
    backgroundColor: onHover ? darken(theme.palette.background.default, 0.05) : theme.palette.background.default,
    transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    height: "100%",
    fontSize: "0.750rem",
    textTransform: "uppercase",
    fontWeight: 600
  }),
  headerInternal: ({
    align
  }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  }),
  headerTitle: ({
    align
  }) => ({
    overflow: "hidden",
    flexShrink: 1
  }),
  headerTitleInternal: ({
    align
  }) => ({
    margin: "0px 4px",
    overflow: "hidden",
    justifyContent: align,
    flexShrink: 1
  }),
  headerIcon: {
    paddingTop: "4px"
  },
  headerIconButton: {
    backgroundColor: theme.palette.mode === "light" ? "#f5f5f5" : theme.palette.background.default
  },
  headerTypography: {
    fontSize: "0.750rem",
    fontWeight: 600,
    textTransform: "uppercase"
  }
}));
const TableHeader = React__default.memo(TableHeaderInternal);
function TableHeaderInternal({
  sort,
  onColumnSort,
  onFilterUpdate,
  filter,
  column
}) {
  const [onHover, setOnHover] = useState(false);
  const ref = useRef(null);
  const classes = useStyles$5({
    onHover,
    align: column.align
  });
  const [open, setOpen] = React__default.useState(false);
  const handleSettingsClick = useCallback((event) => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const update = useCallback((filterForProperty) => {
    onFilterUpdate(filterForProperty);
    setOpen(false);
  }, []);
  return /* @__PURE__ */ jsxs(ErrorBoundary, {
    children: [/* @__PURE__ */ jsxs(Grid, {
      className: classes.header,
      ref,
      wrap: "nowrap",
      alignItems: "center",
      onMouseEnter: () => setOnHover(true),
      onMouseMove: () => setOnHover(true),
      onMouseLeave: () => setOnHover(false),
      container: true,
      children: [/* @__PURE__ */ jsx(Grid, {
        item: true,
        xs: true,
        className: classes.headerTitle,
        children: /* @__PURE__ */ jsxs("div", {
          className: classes.headerInternal,
          children: [/* @__PURE__ */ jsx("div", {
            className: classes.headerIcon,
            children: column.icon && column.icon(onHover || open)
          }), /* @__PURE__ */ jsx("div", {
            className: classes.headerTitleInternal,
            children: column.label
          })]
        })
      }), column.property && !column.property.hideFilter && column.sortable && (sort || onHover || open) && /* @__PURE__ */ jsx(Grid, {
        item: true,
        children: /* @__PURE__ */ jsx(Badge, {
          color: "secondary",
          variant: "dot",
          overlap: "circular",
          invisible: !sort,
          children: /* @__PURE__ */ jsxs(IconButton, {
            size: "small",
            className: classes.headerIconButton,
            onClick: () => {
              onColumnSort(column.key);
            },
            children: [!sort && /* @__PURE__ */ jsx(ArrowUpwardIcon, {
              fontSize: "small"
            }), sort === "asc" && /* @__PURE__ */ jsx(ArrowUpwardIcon, {
              fontSize: "small"
            }), sort === "desc" && /* @__PURE__ */ jsx(ArrowDownwardIcon, {
              fontSize: "small"
            })]
          })
        })
      }), column.property && !column.property.hideFilter && column.filter && /* @__PURE__ */ jsx(Grid, {
        item: true,
        children: /* @__PURE__ */ jsx(Badge, {
          color: "secondary",
          variant: "dot",
          overlap: "circular",
          invisible: !filter,
          children: /* @__PURE__ */ jsx(IconButton, {
            className: classes.headerIconButton,
            size: "small",
            onClick: handleSettingsClick,
            children: /* @__PURE__ */ jsx(ArrowDropDownCircleIcon, {
              fontSize: "small",
              color: onHover || open ? void 0 : "disabled"
            })
          })
        })
      })]
    }), column.sortable && /* @__PURE__ */ jsx(Popover, {
      id: open ? `popover_${column.key}` : void 0,
      open,
      elevation: 2,
      anchorEl: ref.current,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      children: /* @__PURE__ */ jsx(FilterForm, {
        column,
        filter,
        onFilterUpdate: update
      })
    })]
  });
}
function FilterForm({
  column,
  onFilterUpdate,
  filter
}) {
  const id = column.key;
  const classes = useStyles$5({});
  const [filterInternal, setFilterInternal] = useState(filter);
  const submit = (e) => {
    onFilterUpdate(filterInternal);
  };
  const reset = (e) => {
    onFilterUpdate(void 0);
  };
  const filterIsSet = !!filter;
  function createFilterField(id2, filterConfig, filterValue, setFilterValue) {
    if (filterConfig.dataType === "number" || filterConfig.dataType === "string") {
      const dataType = filterConfig.dataType;
      const title = filterConfig.title;
      const enumValues = filterConfig.enumValues;
      return /* @__PURE__ */ jsx(StringNumberFilterField, {
        value: filterValue,
        setValue: setFilterValue,
        name: id2,
        dataType,
        isArray: filterConfig.isArray,
        enumValues,
        title
      });
    } else if (filterConfig.dataType === "boolean") {
      const title = filterConfig.title;
      return /* @__PURE__ */ jsx(BooleanFilterField, {
        value: filterValue,
        setValue: setFilterValue,
        name: id2,
        title
      });
    } else if (filterConfig.dataType === "timestamp") {
      const title = filterConfig.title;
      return /* @__PURE__ */ jsx(DateTimeFilterField, {
        value: filterValue,
        setValue: setFilterValue,
        name: id2,
        isArray: filterConfig.isArray,
        title
      });
    }
    return /* @__PURE__ */ jsx("div", {
      children: `Currently the field ${filterConfig.dataType} is not supported`
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Box, {
      p: 2,
      className: classes.headerTypography,
      children: column.label ?? id
    }), /* @__PURE__ */ jsx(Divider, {}), column.filter && /* @__PURE__ */ jsx(Box, {
      p: 2,
      children: createFilterField(id, column.filter, filterInternal, setFilterInternal)
    }), /* @__PURE__ */ jsxs(Box, {
      display: "flex",
      justifyContent: "flex-end",
      m: 2,
      children: [/* @__PURE__ */ jsx(Box, {
        mr: 1,
        children: /* @__PURE__ */ jsx(Button, {
          disabled: !filterIsSet,
          color: "primary",
          type: "reset",
          "aria-label": "filter clear",
          onClick: reset,
          children: "Clear"
        })
      }), /* @__PURE__ */ jsx(Button, {
        variant: "outlined",
        color: "primary",
        onClick: submit,
        children: "Filter"
      })]
    })]
  });
}

const PIXEL_NEXT_PAGE_OFFSET = 1200;
const useTableStyles = makeStyles((theme) => createStyles({
  tableContainer: {
    width: "100%",
    height: "100%",
    flexGrow: 1
  },
  header: {
    width: "calc(100% + 24px)",
    margin: "0px -12px",
    padding: "0px 12px",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.default,
    transition: "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    height: "100%",
    fontSize: "0.750rem",
    textTransform: "uppercase",
    fontWeight: 600
  },
  tableRow: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "0.875rem"
  },
  tableRowClickable: {
    "&:hover": {
      backgroundColor: theme.palette.mode === "dark" ? alpha$1(theme.palette.background.default, 0.6) : alpha$1(theme.palette.background.default, 0.5)
    }
  },
  column: {
    padding: "0px !important"
  },
  alignText: {
    paddingLeft: "12px !important"
  }
}));
function Table({
  data,
  idColumnBuilder,
  onResetPagination,
  onEndReached,
  size,
  columns,
  frozenIdColumn,
  onRowClick,
  onColumnResize,
  filter,
  checkFilterCombination,
  collection,
  onFilterUpdate,
  sortBy,
  error,
  emptyMessage,
  onSortByUpdate,
  loading,
  hoverRow = true,
  onSort
}) {
  const sortByProperty = sortBy ? sortBy[0] : void 0;
  const currentSort = sortBy ? sortBy[1] : void 0;
  const [tableSize, setTableSize] = React__default.useState();
  const tableRef = useRef(null);
  const scrollRef = useRef(0);
  const endReachedTimestampRef = useRef(0);
  const classes = useTableStyles();
  const getClass = (column) => {
    if (!column.property)
      return classes.column;
    if (!column.property.disableCustomStyles && (column.property.dataType === "number" || column.property.dataType === "string" || column.property.dataType === "timestamp")) {
      return `${classes.column} ${classes.alignText} alignText`;
    } else
      return classes.column;
  };
  useEffect(() => {
    if (tableRef.current && data?.length) {
      tableRef.current.scrollToTop(scrollRef.current);
    }
  }, [data?.length]);
  const onColumnSort = (key) => {
    const isDesc = sortByProperty === key && currentSort === "desc";
    const isAsc = sortByProperty === key && currentSort === "asc";
    const newSort = isAsc ? "desc" : isDesc ? void 0 : "asc";
    const newSortProperty = isDesc ? void 0 : key;
    const newSortBy = newSort && newSortProperty ? [newSortProperty, newSort] : void 0;
    if (filter) {
      if (checkFilterCombination && !checkFilterCombination(filter, newSortBy)) {
        if (onFilterUpdate)
          onFilterUpdate(void 0);
      }
    }
    if (onResetPagination) {
      onResetPagination();
    }
    if (onSortByUpdate) {
      onSortByUpdate(newSortBy);
    }
    onSort();
    scrollToTop();
  };
  const [isSelected, setIsSelected] = React__default.useState(void 0);
  const selectAll = () => {
    const checkbox = document.querySelectorAll(".select-all")[0].getElementsByTagName("input")[0];
    if (isSelected === void 0) {
      checkbox.click();
      setTimeout(() => {
        checkbox.click();
      }, 100);
    } else {
      checkbox.click();
    }
    setIsSelected(checkbox.checked);
  };
  const resetSort = () => {
    if (onSortByUpdate)
      onSortByUpdate(void 0);
  };
  const scrollToTop = () => {
    if (tableRef.current) {
      scrollRef.current = 0;
      tableRef.current.scrollToTop(0);
    }
  };
  const onScroll = ({
    scrollTop,
    scrollUpdateWasRequested
  }) => {
    const prudentTime = Date.now() - endReachedTimestampRef.current > 3e3;
    if (!scrollUpdateWasRequested && prudentTime) {
      scrollRef.current = scrollTop;
    }
  };
  const onEndReachedInternal = () => {
    endReachedTimestampRef.current = Date.now();
    if (onEndReached)
      onEndReached();
  };
  const clickRow = (props) => {
    if (!onRowClick)
      return;
    onRowClick(props);
  };
  const headerRenderer = ({
    columnIndex
  }) => {
    const column = columns[columnIndex - 1];
    const filterForThisProperty = column && filter && filter[column.key] ? filter[column.key] : void 0;
    const onInternalFilterUpdate = (filterForProperty) => {
      let newFilterValue = filter ? {
        ...filter
      } : {};
      if (!filterForProperty) {
        delete newFilterValue[column.key];
      } else {
        newFilterValue[column.key] = filterForProperty;
      }
      const newSortBy = sortByProperty && currentSort ? [sortByProperty, currentSort] : void 0;
      const isNewFilterCombinationValid = !checkFilterCombination || checkFilterCombination(newFilterValue, newSortBy);
      if (!isNewFilterCombinationValid) {
        newFilterValue = filterForProperty ? {
          [column.key]: filterForProperty
        } : {};
      }
      if (onFilterUpdate)
        onFilterUpdate(newFilterValue);
      if (column.key !== sortByProperty) {
        resetSort();
      }
    };
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: columnIndex === 0 ? /* @__PURE__ */ jsxs("div", {
        className: classes.header,
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 0
        },
        children: [/* @__PURE__ */ jsx("p", {
          style: {
            margin: 0,
            width: "45px"
          },
          children: "ID"
        }), /* @__PURE__ */ jsx(Tooltip, {
          title: "Select All",
          className: "select-all",
          children: /* @__PURE__ */ jsx(Checkbox, {
            checked: isSelected,
            onChange: selectAll
          })
        })]
      }) : /* @__PURE__ */ jsx(TableHeader, {
        onFilterUpdate: onInternalFilterUpdate,
        filter: filterForThisProperty,
        sort: sortByProperty === column.key ? currentSort : void 0,
        onColumnSort,
        column
      })
    });
  };
  function buildErrorView() {
    return /* @__PURE__ */ jsxs(Box, {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: 6,
      children: [/* @__PURE__ */ jsx(Typography, {
        variant: "h6",
        children: "Error fetching data from the data source"
      }), error?.name && /* @__PURE__ */ jsx(Typography, {
        children: error?.name
      }), error?.message && /* @__PURE__ */ jsx(Typography, {
        children: error?.message
      })]
    });
  }
  function buildEmptyView() {
    if (loading)
      return /* @__PURE__ */ jsx(CircularProgressCenter, {});
    return /* @__PURE__ */ jsxs(Box, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      padding: 2,
      children: [/* @__PURE__ */ jsx(Box, {
        padding: 1,
        children: /* @__PURE__ */ jsx(AssignmentIcon, {})
      }), /* @__PURE__ */ jsx(Typography, {
        children: emptyMessage
      })]
    });
  }
  const onBaseTableColumnResize = useCallback(({
    column,
    width
  }) => {
    if (onColumnResize) {
      onColumnResize({
        width,
        key: column.key,
        column
      });
    }
  }, [onColumnResize]);
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Measure, {
      bounds: true,
      onResize: setTableSize,
      children: ({
        measureRef
      }) => {
        return /* @__PURE__ */ jsx("div", {
          ref: measureRef,
          className: classes.tableContainer,
          css: baseTableCss,
          children: tableSize?.bounds && /* @__PURE__ */ jsxs(BaseTable, {
            rowClassName: clsx(classes.tableRow, {
              [classes.tableRowClickable]: hoverRow
            }),
            data,
            onColumnResizeEnd: onBaseTableColumnResize,
            width: tableSize.bounds.width,
            height: tableSize.bounds.height,
            emptyRenderer: error ? buildErrorView() : buildEmptyView(),
            fixed: true,
            ignoreFunctionInColumnCompare: false,
            rowHeight: getRowHeight(size),
            ref: tableRef,
            onScroll,
            overscanRowCount: 2,
            onEndReachedThreshold: PIXEL_NEXT_PAGE_OFFSET,
            onEndReached: onEndReachedInternal,
            rowEventHandlers: {
              onClick: clickRow
            },
            children: [/* @__PURE__ */ jsx(Column, {
              headerRenderer,
              cellRenderer: ({
                rowData
              }) => idColumnBuilder ? idColumnBuilder({
                size,
                entry: rowData
              }) : null,
              align: "center",
              dataKey: "id",
              flexShrink: 0,
              frozen: frozenIdColumn ? "left" : void 0,
              width: 160
            }, "header-id"), columns.map((column) => /* @__PURE__ */ jsx(Column, {
              title: column.label,
              className: ({
                rowData
              }) => {
                const currentColumn = data?.filter((d) => d.id === rowData.id)[0];
                if (currentColumn.values.archived) {
                  return `${getClass(column)} archived-row`;
                } else {
                  return getClass(column);
                }
              },
              style: {
                color: column.property && column.property.textColor ? column.property.textColor : "rgba(0, 0, 0, 0.87)"
              },
              headerRenderer,
              cellRenderer: column.cellRenderer,
              height: getRowHeight(size),
              align: column.align,
              flexGrow: 1,
              flexShrink: 0,
              resizable: true,
              size,
              dataKey: column.key,
              width: column.width
            }, column.key))]
          })
        });
      }
    })
  });
}

const useBreadcrumbsContext = () => useContext(BreadcrumbContext);

function NotFoundPage() {
  return /* @__PURE__ */ jsx(Box, {
    display: "flex",
    width: "100%",
    height: "100%",
    children: /* @__PURE__ */ jsxs(Box, {
      m: "auto",
      children: [/* @__PURE__ */ jsx(Typography, {
        variant: "h4",
        align: "center",
        gutterBottom: true,
        children: "Page not found"
      }), /* @__PURE__ */ jsx(Typography, {
        align: "center",
        children: "This page does not exist or you may not have access to it"
      })]
    })
  });
}

function NavigationRoutes({
  HomePage
}) {
  const location = useLocation();
  const navigationContext = useNavigation();
  const navigation = navigationContext.navigation;
  if (!navigation)
    return /* @__PURE__ */ jsx(Fragment, {});
  const state = location.state;
  const baseLocation = state && state.base_location ? state.base_location : location;
  const customRoutes = [];
  if (navigation.views) {
    const buildCMSViewRoute = (path, cmsView) => {
      return /* @__PURE__ */ jsx(Route, {
        path,
        element: /* @__PURE__ */ jsx(BreadcrumbUpdater, {
          path,
          title: cmsView.name,
          children: cmsView.view
        }, `navigation_${path}`)
      }, "navigation_view_" + path);
    };
    navigation.views.forEach((cmsView) => {
      if (Array.isArray(cmsView.path))
        customRoutes.push(...cmsView.path.map((path) => buildCMSViewRoute(path, cmsView)));
      else
        customRoutes.push(buildCMSViewRoute(cmsView.path, cmsView));
    });
  }
  const collectionRoutes = [...navigation.collections].sort((a, b) => b.path.length - a.path.length).map((collection) => {
    const urlPath = navigationContext.buildUrlCollectionPath(collection.path);
    return /* @__PURE__ */ jsx(Route, {
      path: urlPath + "/*",
      element: /* @__PURE__ */ jsx(BreadcrumbUpdater, {
        path: urlPath,
        title: collection.name,
        children: /* @__PURE__ */ jsx(EntityCollectionView$1, {
          path: collection.path,
          collection
        })
      })
    }, `navigation_${collection.path}`);
  });
  const homeRoute = /* @__PURE__ */ jsx(Route, {
    path: "/",
    element: /* @__PURE__ */ jsx(BreadcrumbUpdater, {
      path: "/",
      title: "Home",
      children: HomePage ? /* @__PURE__ */ jsx(HomePage, {}) : /* @__PURE__ */ jsx(FireCMSHomePage, {})
    }, "navigation_home")
  });
  const notFoundRoute = /* @__PURE__ */ jsx(Route, {
    path: "*",
    element: /* @__PURE__ */ jsx(NotFoundPage, {})
  });
  return /* @__PURE__ */ jsxs(Routes, {
    location: baseLocation,
    children: [collectionRoutes, customRoutes, homeRoute, notFoundRoute]
  });
}
function BreadcrumbUpdater({
  children,
  title,
  path
}) {
  const breadcrumbsContext = useBreadcrumbsContext();
  React__default.useEffect(() => {
    breadcrumbsContext.set({
      breadcrumbs: [{
        title,
        url: path
      }]
    });
  }, [path, title]);
  return /* @__PURE__ */ jsx(Fragment, {
    children
  });
}

function FireCMSLogo() {
  return /* @__PURE__ */ jsxs("svg", {
    width: "232",
    height: "232",
    viewBox: "0 0 599 599",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("defs", {
      children: [/* @__PURE__ */ jsxs("radialGradient", {
        cx: "28.6213569%",
        cy: "43.1133328%",
        fx: "28.6213569%",
        fy: "43.1133328%",
        r: "71.5003456%",
        gradientTransform: "translate(0.286214,0.431133),rotate(3.343450),scale(1.000000,0.996175),translate(-0.286214,-0.431133)",
        id: "radialGradient-1",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#FF5B79",
          offset: "0%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#FA5574",
          offset: "28.0930803%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#EC4C51",
          offset: "44.7242531%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#9543C1",
          offset: "71.4578165%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#3857B3",
          offset: "100%"
        })]
      }), /* @__PURE__ */ jsxs("radialGradient", {
        cx: "53.6205516%",
        cy: "47.2473036%",
        fx: "53.6205516%",
        fy: "47.2473036%",
        r: "50.8229649%",
        gradientTransform: "translate(0.536206,0.472473),rotate(90.000000),scale(1.000000,1.206631),translate(-0.536206,-0.472473)",
        id: "radialGradient-2",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#68294F",
          stopOpacity: "0",
          offset: "0%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#5E2548",
          stopOpacity: "0.04641108",
          offset: "75.3503173%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#0D060B",
          stopOpacity: "0.437431709",
          offset: "100%"
        })]
      }), /* @__PURE__ */ jsxs("radialGradient", {
        cx: "53.8605015%",
        cy: "48.1990423%",
        fx: "53.8605015%",
        fy: "48.1990423%",
        r: "59.9151549%",
        gradientTransform: "translate(0.538605,0.481990),rotate(180.000000),scale(1.000000,0.925027),translate(-0.538605,-0.481990)",
        id: "radialGradient-3",
        children: [/* @__PURE__ */ jsx("stop", {
          stopColor: "#68294F",
          stopOpacity: "0",
          offset: "0%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#5E2548",
          stopOpacity: "0.04641108",
          offset: "84.0867343%"
        }), /* @__PURE__ */ jsx("stop", {
          stopColor: "#FF0000",
          stopOpacity: "0.567324765",
          offset: "100%"
        })]
      })]
    }), /* @__PURE__ */ jsx("g", {
      id: "Page-1",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: /* @__PURE__ */ jsxs("g", {
        id: "firecms_logo",
        children: [/* @__PURE__ */ jsx("circle", {
          fill: "url(#radialGradient-1)",
          cx: "299.5",
          cy: "299.5",
          r: "299.5"
        }), /* @__PURE__ */ jsx("circle", {
          fill: "url(#radialGradient-2)",
          cx: "299.5",
          cy: "299.5",
          r: "299.5"
        }), /* @__PURE__ */ jsx("circle", {
          fill: "url(#radialGradient-3)",
          cx: "299.5",
          cy: "299.5",
          r: "299.5"
        })]
      })
    })]
  });
}

const useStyles$4 = makeStyles((theme) => createStyles({
  logo: {
    padding: theme.spacing(3),
    maxWidth: 280
  }
}));
function Drawer({
  logo,
  closeDrawer
}) {
  const classes = useStyles$4();
  const navigationContext = useNavigation();
  const {
    navigationEntries,
    groups
  } = useMemo(() => computeTopNavigation(navigationContext, false), [navigationContext]);
  const ungroupedNavigationViews = Object.values(navigationEntries).filter((e) => !e.group);
  const createNavigationListItem = useCallback((index, group, entry) => /* @__PURE__ */ jsx(ListItem, {
    button: true,
    component: NavLink,
    onClick: closeDrawer,
    style: ({
      isActive
    }) => ({
      fontWeight: isActive ? "600" : "500",
      background: isActive ? "rgba(128,128,128,0.1)" : "inherit"
    }),
    to: entry.url,
    children: /* @__PURE__ */ jsx(Typography, {
      variant: "subtitle2",
      sx: {
        fontWeight: "inherit",
        py: 0.5
      },
      children: entry.name.toUpperCase()
    })
  }, `navigation_${index}`), [closeDrawer]);
  let logoComponent;
  if (logo) {
    logoComponent = /* @__PURE__ */ jsx("img", {
      className: classes.logo,
      src: logo,
      alt: "Logo"
    });
  } else {
    logoComponent = /* @__PURE__ */ jsx("div", {
      className: classes.logo,
      children: /* @__PURE__ */ jsx(FireCMSLogo, {})
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Link, {
      color: "inherit",
      onClick: closeDrawer,
      component: NavLink,
      to: navigationContext.homeUrl,
      children: logoComponent
    }, "breadcrumb-home"), /* @__PURE__ */ jsxs(List, {
      children: [groups.map((group) => /* @__PURE__ */ jsxs(React__default.Fragment, {
        children: [/* @__PURE__ */ jsx(Divider, {}, `divider_${group}`), /* @__PURE__ */ jsx(Box, {
          pt: 2,
          pl: 2,
          pr: 2,
          pb: 0.5,
          children: /* @__PURE__ */ jsx(Typography, {
            variant: "caption",
            color: "textSecondary",
            className: "weight-500",
            children: group.toUpperCase()
          })
        }), Object.values(navigationEntries).filter((e) => e.group === group).map((view, index) => createNavigationListItem(index, group, view))]
      }, `drawer_group_${group}`)), ungroupedNavigationViews.length > 0 && /* @__PURE__ */ jsx(Divider, {}, "divider_ungrouped"), ungroupedNavigationViews.map((view, index) => createNavigationListItem(index, "none", view))]
    })]
  });
}

const useStyles$3 = makeStyles((theme) => createStyles({
  appbar: {},
  menuButton: {
    marginRight: theme.spacing(2)
  },
  breadcrumb: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover, &:focus": {
      cursor: "pointer",
      backgroundColor: theme.palette.grey[300]
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.grey[400]
    }
  }
}));
function FireCMSAppBar({
  title,
  handleDrawerToggle,
  toolbarExtraWidget
}) {
  const classes = useStyles$3();
  const breadcrumbsContext = useBreadcrumbsContext();
  const {
    breadcrumbs
  } = breadcrumbsContext;
  const authController = useAuthController();
  const {
    mode,
    toggleMode
  } = useModeState();
  const initial = authController.user?.displayName ? authController.user.displayName[0].toUpperCase() : authController.user?.email ? authController.user.email[0].toUpperCase() : "A";
  return /* @__PURE__ */ jsx(Slide, {
    direction: "down",
    in: true,
    mountOnEnter: true,
    unmountOnExit: true,
    children: /* @__PURE__ */ jsx(AppBar, {
      className: classes.appbar,
      position: "relative",
      elevation: 1,
      children: /* @__PURE__ */ jsxs(Toolbar, {
        children: [/* @__PURE__ */ jsx(IconButton, {
          color: "inherit",
          "aria-label": "Open drawer",
          edge: "start",
          onClick: handleDrawerToggle,
          className: classes.menuButton,
          size: "large",
          children: /* @__PURE__ */ jsx(MenuIcon, {})
        }), /* @__PURE__ */ jsx(Hidden, {
          lgDown: true,
          children: /* @__PURE__ */ jsx(Box, {
            mr: 3,
            children: /* @__PURE__ */ jsx(Link, {
              underline: "none",
              color: "inherit",
              component: Link$1,
              to: "/",
              children: /* @__PURE__ */ jsx(Typography, {
                variant: "h6",
                noWrap: true,
                children: title
              })
            }, "breadcrumb-home")
          })
        }), /* @__PURE__ */ jsx(Box, {
          mr: 2,
          children: /* @__PURE__ */ jsx(Breadcrumbs, {
            separator: /* @__PURE__ */ jsx(NavigateNextIcon, {
              htmlColor: "rgb(0,0,0,0.87)",
              fontSize: "small"
            }),
            "aria-label": "breadcrumb",
            children: breadcrumbs.map((entry, index) => /* @__PURE__ */ jsx(Link, {
              underline: "none",
              color: "inherit",
              component: Link$1,
              to: entry.url,
              children: /* @__PURE__ */ jsx(Chip, {
                classes: {
                  root: classes.breadcrumb
                },
                label: entry.title
              })
            }, `breadcrumb-${index}`))
          })
        }), /* @__PURE__ */ jsx(Box, {
          flexGrow: 1
        }), toolbarExtraWidget && /* @__PURE__ */ jsx(ErrorBoundary, {
          children: toolbarExtraWidget
        }), /* @__PURE__ */ jsx(Box, {
          p: 1,
          mr: 1,
          children: /* @__PURE__ */ jsx(IconButton, {
            color: "inherit",
            "aria-label": "Open drawer",
            edge: "start",
            onClick: () => toggleMode(),
            size: "large",
            children: mode === "dark" ? /* @__PURE__ */ jsx(Brightness3Icon, {}) : /* @__PURE__ */ jsx(Brightness5Icon, {})
          })
        }), /* @__PURE__ */ jsx(Box, {
          p: 1,
          mr: 1,
          children: authController.user && authController.user.photoURL ? /* @__PURE__ */ jsx(Avatar, {
            src: authController.user.photoURL
          }) : /* @__PURE__ */ jsx(Avatar, {
            children: initial
          })
        }), /* @__PURE__ */ jsx(Button, {
          variant: "text",
          color: "inherit",
          onClick: authController.signOut,
          children: "Log Out"
        })]
      })
    })
  });
}

const useStyles$2 = makeStyles$1((theme) => createStyles$1({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh"
  },
  content: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    overflow: "auto"
  },
  drawerPaper: {
    width: 280
  }
}));
function Scaffold(props) {
  const {
    children,
    name,
    logo,
    toolbarExtraWidget,
    Drawer: Drawer$2
  } = props;
  const classes = useStyles$2();
  const navigationContext = useNavigation();
  const [drawerOpen, setDrawerOpen] = React__default.useState(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);
  const UsedDrawer = Drawer$2 || Drawer;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("nav", {
      children: /* @__PURE__ */ jsx(Drawer$1, {
        variant: "temporary",
        anchor: "left",
        open: drawerOpen,
        onClose: closeDrawer,
        classes: {
          paper: classes.drawerPaper
        },
        ModalProps: {
          keepMounted: true
        },
        children: !navigationContext.navigation ? /* @__PURE__ */ jsx(CircularProgressCenter, {}) : /* @__PURE__ */ jsx(UsedDrawer, {
          logo,
          closeDrawer
        })
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: classes.main,
      children: [/* @__PURE__ */ jsx(FireCMSAppBar, {
        title: name,
        handleDrawerToggle,
        toolbarExtraWidget
      }), /* @__PURE__ */ jsx("main", {
        className: classes.content,
        children
      }), /* @__PURE__ */ jsxs("div", {
        style: {
          height: "80px",
          width: "100%",
          backgroundColor: "#3D8B76",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 20px",
          color: "#fff",
          fontWeight: "500"
        },
        children: ["\xA9 2015-", new Date().getFullYear(), " Neuro-Eye Diagnostic Systems LLC ", /* @__PURE__ */ jsx("br", {}), "Patent No. 11,369,263"]
      })]
    })]
  });
}

function getTranslateValue(node) {
  const rect = node.getBoundingClientRect();
  const containerWindow = ownerWindow(node);
  let transform;
  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    const computedStyle = containerWindow.getComputedStyle(node);
    transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
  }
  let offsetX = 0;
  if (transform && transform !== "none" && typeof transform === "string") {
    const transformValues = transform.split("(")[1].split(")")[0].split(",");
    offsetX = parseInt(transformValues[4], 10);
  }
  return `translateX(${containerWindow.innerWidth}px) translateX(${offsetX - rect.left}px)`;
}
function setTranslateValue(node) {
  const transform = getTranslateValue(node);
  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
const SlideFade = React.forwardRef(function SlideFade2(props, ref) {
  const {
    children,
    in: inProp,
    timeout,
    onExitAnimation,
    ...other
  } = props;
  const theme = useTheme();
  const childrenRef = React.useRef(null);
  const handleRefIntermediary = useForkRef(children.ref, childrenRef);
  const handleRef = useForkRef(handleRefIntermediary, ref);
  const normalizedTransitionCallback = (callback) => (isAppearing) => {
    if (callback) {
      if (isAppearing === void 0) {
        callback(childrenRef.current);
      } else {
        callback(childrenRef.current, isAppearing);
      }
    }
  };
  const handleEnter = normalizedTransitionCallback((node) => {
    setTranslateValue(node);
    reflow(node);
  });
  const handleEntering = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      timeout
    }, {
      mode: "enter"
    });
    node.style.webkitTransition = theme.transitions.create("-webkit-transform", {
      ...transitionProps,
      easing: theme.transitions.easing.easeOut
    });
    node.style.transition = theme.transitions.create("transform", {
      ...transitionProps,
      easing: theme.transitions.easing.easeOut
    });
    node.style.webkitTransform = "none";
    node.style.transform = "none";
    node.style.opacity = 1;
  });
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps({
      timeout
    }, {
      mode: "exit"
    });
    node.style.opacity = 0.5;
    node.style.webkitTransition = theme.transitions.create(["-webkit-transform", "opacity"], {
      ...transitionProps,
      easing: theme.transitions.easing.sharp
    });
    node.style.transition = theme.transitions.create(["transform", "opacity"], {
      ...transitionProps,
      easing: theme.transitions.easing.sharp
    });
    setTranslateValue(node);
  });
  const handleExited = normalizedTransitionCallback((node) => {
    node.style.webkitTransition = "";
    node.style.transition = "";
  });
  const updatePosition = React.useCallback(() => {
    if (childrenRef.current) {
      setTranslateValue(childrenRef.current);
    }
  }, []);
  React.useEffect(() => {
    if (inProp) {
      return void 0;
    }
    const handleResize = debounce(() => {
      if (childrenRef.current) {
        setTranslateValue(childrenRef.current);
      }
    });
    const containerWindow = ownerWindow(childrenRef.current);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [inProp]);
  React.useEffect(() => {
    if (!inProp) {
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /* @__PURE__ */ jsx(Transition, {
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    appear: true,
    in: inProp,
    timeout,
    ...other,
    children: (state, childProps) => {
      return React.cloneElement(children, {
        ref: handleRef,
        style: {
          visibility: state === "exited" && !inProp ? "hidden" : void 0,
          ...children.props.style
        },
        ...childProps
      });
    }
  });
});
const reflow = (node) => node.scrollTop;
function getTransitionProps(props, options) {
  const {
    timeout
  } = props;
  return {
    duration: typeof timeout === "number" ? timeout : timeout[options.mode] || 0
  };
}

const useStyles$1 = makeStyles((theme) => createStyles({
  root: {},
  paper: {
    height: "100%",
    WebkitOverflowScrolling: "touch",
    position: "fixed",
    outline: 0
  },
  paperAnchorRight: ({
    offsetPosition
  }) => ({
    left: "auto",
    right: 0
  }),
  modal: {}
}));
const defaultTransitionDuration = {
  enter: 225,
  exit: 175
};
const SideDialogDrawer = React__default.forwardRef(function EntityDrawer(props, ref) {
  const {
    children,
    onClose,
    open,
    offsetPosition,
    onExitAnimation
  } = props;
  const classes = useStyles$1({
    offsetPosition
  });
  const drawer = /* @__PURE__ */ jsx(Paper, {
    elevation: 1,
    square: true,
    style: {
      transition: "transform 1000ms cubic-bezier(0.33, 1, 0.68, 1)",
      transform: `translateX(-${offsetPosition * 240}px)`
    },
    className: clsx(classes.paper, classes.paperAnchorRight),
    children
  });
  const slidingDrawer = /* @__PURE__ */ jsx(SlideFade, {
    in: open,
    timeout: defaultTransitionDuration,
    onExitAnimation,
    children: drawer
  });
  return /* @__PURE__ */ jsx(Modal, {
    BackdropProps: {
      transitionDuration: defaultTransitionDuration
    },
    BackdropComponent: Backdrop,
    className: clsx(classes.root, classes.modal),
    open,
    onClose,
    ref,
    keepMounted: true,
    disableEnforceFocus: true,
    children: slidingDrawer
  });
});

const CONTAINER_WIDTH = "560px";
const CONTAINER_FULL_WIDTH = "100vw";
const TAB_WIDTH = "55vw";

const EntityCollectionView = lazy(() => Promise.resolve().then(function () { return EntityCollectionView$2; }));
const EntityForm = lazy(() => Promise.resolve().then(function () { return EntityForm$2; }));
const EntityPreview = lazy(() => Promise.resolve().then(function () { return EntityPreview$2; }));
const useStylesSide = makeStyles((theme) => createStyles({
  container: ({
    containerWidth
  }) => ({
    display: "flex",
    flexDirection: "column",
    width: containerWidth,
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      width: CONTAINER_FULL_WIDTH
    },
    transition: "width 250ms ease-in-out"
  }),
  containerWide: ({
    containerWidth
  }) => ({
    width: `calc(${TAB_WIDTH} + ${containerWidth})`,
    [theme.breakpoints.down("lg")]: {
      width: CONTAINER_FULL_WIDTH
    }
  }),
  subcollectionPanel: {
    width: TAB_WIDTH,
    height: "100%",
    overflow: "auto",
    borderLeft: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down("lg")]: {
      borderLeft: "inherit",
      width: CONTAINER_FULL_WIDTH
    }
  },
  tabsContainer: ({
    containerWidth
  }) => ({
    flexGrow: 1,
    height: "100%",
    width: `calc(${TAB_WIDTH} + ${containerWidth})`,
    [theme.breakpoints.down("lg")]: {
      width: CONTAINER_FULL_WIDTH
    },
    display: "flex",
    overflow: "auto",
    flexDirection: "row"
  }),
  form: ({
    containerWidth
  }) => ({
    width: containerWidth,
    maxWidth: "100%",
    height: "100%",
    overflow: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: CONTAINER_FULL_WIDTH,
      width: CONTAINER_FULL_WIDTH
    }
  }),
  tabBar: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0)
  },
  tab: {
    fontSize: "0.875rem",
    minWidth: "140px"
  }
}));
function EntityView({
  path,
  entityId,
  callbacks,
  selectedSubpath,
  copy,
  permissions,
  schema: schemaOrResolver,
  subcollections,
  onModifiedValues,
  width
}) {
  const resolvedWidth = typeof width === "number" ? `${width}px` : width;
  const classes = useStylesSide({
    containerWidth: resolvedWidth ?? CONTAINER_WIDTH
  });
  const dataSource = useDataSource();
  const sideEntityController = useSideEntityController();
  const snackbarContext = useSnackbarController();
  const context = useFireCMSContext();
  const authController = useAuthController();
  const [status, setStatus] = useState(copy ? "copy" : entityId ? "existing" : "new");
  const [currentEntityId, setCurrentEntityId] = useState(entityId);
  const [readOnly, setReadOnly] = useState(false);
  const [tabsPosition, setTabsPosition] = React__default.useState(-1);
  const [modifiedValues, setModifiedValues] = useState();
  const {
    entity,
    dataLoading,
    dataLoadingError
  } = useEntityFetch({
    path,
    entityId: currentEntityId,
    schema: schemaOrResolver,
    useCache: false
  });
  const resolvedSchema = useMemo(() => computeSchema({
    schemaOrResolver,
    path,
    entityId,
    values: modifiedValues,
    previousValues: entity?.values
  }), [schemaOrResolver, path, entityId, modifiedValues]);
  useEffect(() => {
    function beforeunload(e) {
      if (modifiedValues) {
        e.preventDefault();
        e.returnValue = `You have unsaved changes in this ${resolvedSchema.name}. Are you sure you want to leave this page?`;
      }
    }
    if (typeof window !== "undefined")
      window.addEventListener("beforeunload", beforeunload);
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("beforeunload", beforeunload);
    };
  }, [modifiedValues, window]);
  const customViews = resolvedSchema.views;
  const customViewsCount = customViews?.length ?? 0;
  useEffect(() => {
    if (entity)
      setReadOnly(!canEdit(permissions, entity, authController, path, context));
  }, [entity, permissions]);
  const theme = useTheme();
  const largeLayout = useMediaQuery(theme.breakpoints.up("lg"));
  useEffect(() => {
    if (!selectedSubpath)
      setTabsPosition(-1);
    if (customViews) {
      const index = customViews.map((c) => c.path).findIndex((p) => p === selectedSubpath);
      setTabsPosition(index);
    }
    if (subcollections && selectedSubpath) {
      const index = subcollections.map((c) => c.path).findIndex((p) => p === selectedSubpath);
      setTabsPosition(index + customViewsCount);
    }
  }, [selectedSubpath]);
  const onPreSaveHookError = useCallback((e) => {
    snackbarContext.open({
      type: "error",
      title: "Error before saving",
      message: e?.message
    });
    console.error(e);
  }, []);
  const onSaveSuccessHookError = useCallback((e) => {
    snackbarContext.open({
      type: "error",
      title: `${resolvedSchema.name}: Error after saving (entity is saved)`,
      message: e?.message
    });
    console.error(e);
  }, []);
  const onSaveSuccess = useCallback((updatedEntity) => {
    setCurrentEntityId(updatedEntity.id);
    snackbarContext.open({
      type: "success",
      message: `${resolvedSchema.name}: Saved correctly`
    });
    setStatus("existing");
    onModifiedValues(false);
    if (tabsPosition === -1)
      sideEntityController.close();
  }, []);
  const onSaveFailure = useCallback((e) => {
    snackbarContext.open({
      type: "error",
      title: `${resolvedSchema.name}: Error saving`,
      message: e?.message
    });
    console.error("Error saving entity", path, entityId);
    console.error(e);
  }, []);
  const onEntitySave = useCallback(async ({
    schema,
    path: path2,
    entityId: entityId2,
    values,
    previousValues
  }) => {
    if (!status)
      return;
    return saveEntityWithCallbacks({
      path: path2,
      entityId: entityId2,
      callbacks,
      values,
      previousValues,
      schema,
      status,
      dataSource,
      context,
      onSaveSuccess,
      onSaveFailure,
      onPreSaveHookError,
      onSaveSuccessHookError
    });
  }, [status, callbacks, dataSource, context, onSaveSuccess, onSaveFailure, onPreSaveHookError, onSaveSuccessHookError]);
  const onDiscard = useCallback(() => {
    if (tabsPosition === -1)
      sideEntityController.close();
  }, [sideEntityController, tabsPosition]);
  const body = !readOnly ? /* @__PURE__ */ jsx(Suspense, {
    fallback: /* @__PURE__ */ jsx(CircularProgressCenter, {}),
    children: /* @__PURE__ */ jsx(EntityForm, {
      status,
      path,
      schemaOrResolver,
      onEntitySave,
      onDiscard,
      onValuesChanged: setModifiedValues,
      onModified: onModifiedValues,
      entity
    }, `form_${path}_${entity?.id ?? "new"}`)
  }) : /* @__PURE__ */ jsx(Suspense, {
    fallback: /* @__PURE__ */ jsx(CircularProgressCenter, {}),
    children: /* @__PURE__ */ jsx(EntityPreview, {
      entity,
      path,
      schema: resolvedSchema
    })
  });
  const customViewsView = customViews && customViews.map((customView, colIndex) => {
    return /* @__PURE__ */ jsx(Box, {
      className: classes.subcollectionPanel,
      role: "tabpanel",
      flexGrow: 1,
      height: "100%",
      width: "100%",
      hidden: tabsPosition !== colIndex,
      children: /* @__PURE__ */ jsx(ErrorBoundary, {
        children: customView.builder({
          schema: resolvedSchema,
          entity,
          modifiedValues: modifiedValues ?? entity?.values
        })
      })
    }, `custom_view_${customView.path}_${colIndex}`);
  });
  const subCollectionsViews = subcollections && subcollections.map((subcollection, colIndex) => {
    const absolutePath = entity ? `${entity?.path}/${entity?.id}/${removeInitialAndTrailingSlashes(subcollection.path)}` : void 0;
    return /* @__PURE__ */ jsx(Box, {
      className: classes.subcollectionPanel,
      role: "tabpanel",
      flexGrow: 1,
      hidden: tabsPosition !== colIndex + customViewsCount,
      children: entity && absolutePath ? /* @__PURE__ */ jsx(Suspense, {
        fallback: /* @__PURE__ */ jsx(CircularProgressCenter, {}),
        children: /* @__PURE__ */ jsx(EntityCollectionView, {
          path: absolutePath,
          collection: subcollection
        })
      }) : /* @__PURE__ */ jsx(Box, {
        m: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: /* @__PURE__ */ jsx(Box, {
          children: "You need to save your entity before adding additional collections"
        })
      })
    }, `subcol_${subcollection.name}_${colIndex}`);
  });
  const getSelectedSubpath = useCallback((value) => {
    if (value === -1)
      return void 0;
    if (customViews && value < customViewsCount) {
      return customViews[value].path;
    }
    if (subcollections) {
      return subcollections[value - customViewsCount].path;
    }
    throw Error("Something is wrong in getSelectedSubpath");
  }, [customViews]);
  const onSideTabClick = useCallback((value) => {
    setTabsPosition(value);
    if (entityId) {
      sideEntityController.open({
        path,
        entityId,
        selectedSubpath: getSelectedSubpath(value),
        overrideSchemaRegistry: false
      });
    }
  }, []);
  const header = /* @__PURE__ */ jsxs(Box, {
    sx: {
      paddingLeft: 2,
      paddingRight: 2,
      paddingTop: 2,
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.mode === "light" ? theme.palette.background.default : theme.palette.background.paper
    },
    children: [/* @__PURE__ */ jsx(IconButton, {
      onClick: (e) => sideEntityController.close(),
      size: "large",
      children: /* @__PURE__ */ jsx(CloseIcon, {})
    }), /* @__PURE__ */ jsx(Tabs, {
      value: tabsPosition === -1 ? 0 : false,
      indicatorColor: "secondary",
      textColor: "inherit",
      scrollButtons: "auto",
      children: /* @__PURE__ */ jsx(Tab, {
        label: resolvedSchema.name,
        classes: {
          root: classes.tab
        },
        wrapped: true,
        onClick: () => {
          onSideTabClick(-1);
        }
      })
    }), /* @__PURE__ */ jsx(Box, {
      flexGrow: 1
    }), dataLoading && /* @__PURE__ */ jsx(CircularProgress, {
      size: 16,
      thickness: 8
    }), /* @__PURE__ */ jsxs(Tabs, {
      value: tabsPosition >= 0 ? tabsPosition : false,
      indicatorColor: "secondary",
      textColor: "inherit",
      onChange: (ev, value) => {
        onSideTabClick(value);
      },
      className: classes.tabBar,
      variant: "scrollable",
      scrollButtons: "auto",
      children: [customViews && customViews.map((view) => /* @__PURE__ */ jsx(Tab, {
        classes: {
          root: classes.tab
        },
        wrapped: true,
        label: view.name
      }, `entity_detail_custom_tab_${view.name}`)), subcollections && subcollections.map((subcollection) => /* @__PURE__ */ jsx(Tab, {
        classes: {
          root: classes.tab
        },
        wrapped: true,
        label: subcollection.name
      }, `entity_detail_collection_tab_${subcollection.name}`))]
    })]
  });
  return /* @__PURE__ */ jsx("div", {
    className: clsx(classes.container, {
      [classes.containerWide]: tabsPosition !== -1
    }),
    children: dataLoading ? /* @__PURE__ */ jsx(CircularProgressCenter, {}) : /* @__PURE__ */ jsxs(Fragment, {
      children: [header, /* @__PURE__ */ jsx(Divider, {}), /* @__PURE__ */ jsxs("div", {
        className: classes.tabsContainer,
        children: [/* @__PURE__ */ jsx(Box, {
          role: "tabpanel",
          hidden: !largeLayout && tabsPosition !== -1,
          className: classes.form,
          children: body
        }), customViewsView, subCollectionsViews]
      })]
    })
  });
}

function useNavigationUnsavedChangesDialog(when, onSuccess) {
  const [nextLocation, setNextLocation] = React__default.useState();
  const {
    navigator
  } = React__default.useContext(UNSAFE_NavigationContext);
  const navigate = useNavigate();
  const handleCancel = () => {
    setNextLocation(void 0);
  };
  const handleOk = () => {
    onSuccess();
    setNextLocation(void 0);
    navigate(-1);
  };
  const blocker = useCallback(({
    action,
    location: nextLocation2,
    retry
  }) => {
    switch (action) {
      case "REPLACE": {
        retry();
        return;
      }
      case "POP": {
        setNextLocation(nextLocation2);
      }
    }
  }, []);
  React__default.useEffect(() => {
    if (!when)
      return;
    if (nextLocation)
      return;
    if (!("block" in navigator))
      return;
    const unblock = navigator.block((tx) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        }
      };
      blocker(autoUnblockingTx);
    });
    return unblock;
  }, [navigator, blocker, when, nextLocation]);
  return {
    navigationWasBlocked: Boolean(nextLocation),
    handleCancel,
    handleOk
  };
}
function UnsavedChangesDialog({
  open,
  handleOk,
  handleCancel,
  schemaName
}) {
  return /* @__PURE__ */ jsxs(Dialog$1, {
    open,
    onClose: handleCancel,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    children: [/* @__PURE__ */ jsx(DialogTitle$1, {
      id: "alert-dialog-title",
      children: "Unsaved changes"
    }), /* @__PURE__ */ jsxs(DialogContent$1, {
      children: [/* @__PURE__ */ jsxs(DialogContentText$1, {
        id: "alert-dialog-description",
        children: ["You have unsaved changes in this ", /* @__PURE__ */ jsx("b", {
          children: schemaName
        }), "."]
      }), /* @__PURE__ */ jsx(DialogContentText$1, {
        id: "alert-dialog-description",
        children: "Are you sure you want to leave this page?"
      })]
    }), /* @__PURE__ */ jsxs(DialogActions$1, {
      children: [/* @__PURE__ */ jsx(Button$1, {
        onClick: handleCancel,
        autoFocus: true,
        children: " Cancel "
      }), /* @__PURE__ */ jsx(Button$1, {
        onClick: handleOk,
        children: " Ok "
      })]
    })]
  });
}

function SideEntityDialogs() {
  const sideEntityController = useSideEntityController();
  const sidePanels = sideEntityController.sidePanels;
  const allPanels = [...sidePanels, void 0];
  return /* @__PURE__ */ jsx(Fragment, {
    children: allPanels.map((panel, index) => /* @__PURE__ */ jsx(SideEntityDialog, {
      panel,
      offsetPosition: sidePanels.length - index - 1
    }, `side_entity_dialog_${index}`))
  });
}
function SideEntityDialog({
  panel,
  offsetPosition
}) {
  const [modifiedValues, setModifiedValues] = useState(false);
  const [drawerCloseRequested, setDrawerCloseRequested] = useState(false);
  const {
    navigationWasBlocked,
    handleOk: handleNavigationOk,
    handleCancel: handleNavigationCancel
  } = useNavigationUnsavedChangesDialog(modifiedValues && !drawerCloseRequested, () => setModifiedValues(false));
  const handleDrawerCloseOk = () => {
    setModifiedValues(false);
    setDrawerCloseRequested(false);
    sideEntityController.close();
  };
  const handleDrawerCloseCancel = () => {
    setDrawerCloseRequested(false);
  };
  const sideEntityController = useSideEntityController();
  const navigationContext = useNavigation();
  const schemaProps = !panel ? void 0 : navigationContext.getCollectionResolver(panel.path, panel.entityId);
  if (panel && !schemaProps) {
    throw Error("ERROR: You are trying to open an entity with no schema defined.");
  }
  const schema = useMemo(() => {
    if (!panel)
      return void 0;
    return computeSchema({
      schemaOrResolver: schemaProps.schemaResolver,
      path: panel.path,
      entityId: panel.entityId
    });
  }, [panel, schemaProps]);
  if (!panel || !schema) {
    return /* @__PURE__ */ jsx(SideDialogDrawer, {
      open: false,
      offsetPosition,
      children: /* @__PURE__ */ jsx("div", {
        style: {
          width: CONTAINER_WIDTH
        }
      })
    });
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(SideDialogDrawer, {
      open: Boolean(panel),
      onClose: () => {
        if (modifiedValues) {
          setDrawerCloseRequested(true);
        } else {
          sideEntityController.close();
        }
      },
      offsetPosition,
      children: /* @__PURE__ */ jsx(ErrorBoundary, {
        children: /* @__PURE__ */ jsx(EntityView, {
          ...schemaProps,
          ...panel,
          schema: schemaProps.schemaResolver,
          onModifiedValues: setModifiedValues
        })
      })
    }), /* @__PURE__ */ jsx(UnsavedChangesDialog, {
      open: navigationWasBlocked || drawerCloseRequested,
      handleOk: drawerCloseRequested ? handleDrawerCloseOk : handleNavigationOk,
      handleCancel: drawerCloseRequested ? handleDrawerCloseCancel : handleNavigationCancel,
      schemaName: schema.name
    })]
  });
}

const createCMSDefaultTheme = ({
  mode,
  primaryColor,
  secondaryColor,
  fontFamily
}) => {
  const original = createTheme({
    palette: {
      mode,
      background: {
        default: mode === "dark" ? "#242424" : "#f6f7f8"
      },
      primary: {
        main: primaryColor || "#0070f4"
      },
      secondary: {
        main: secondaryColor || pink["400"]
      },
      error: {
        main: red.A400
      }
    },
    typography: {
      fontFamily: fontFamily || '"Rubik", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeightMedium: 500,
      h6: {
        fontWeight: 500,
        fontSize: "1.15rem"
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4
          }
        }
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:last-child td": {
              borderBottom: 0
            }
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.mono": {
              fontFamily: "'Space Mono', 'Lucida Console', monospace"
            },
            "&.weight-500": {
              fontWeight: 500
            }
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            "&.mono": {
              fontFamily: "'Space Mono', 'Lucida Console', monospace"
            }
          }
        }
      }
    }
  });
  return {
    ...original
  };
};

function buildNavigation(navigation) {
  return navigation;
}
function buildCollection(collectionView) {
  return collectionView;
}
function buildSchema(schema) {
  return schema;
}
function buildProperty(property) {
  return property;
}
function buildProperties(properties) {
  return properties;
}
function buildPropertiesOrBuilder(propertiesOrBuilder) {
  return propertiesOrBuilder;
}
function buildEnumValues(enumValues) {
  return enumValues;
}
function buildEnumValueConfig(enumValueConfig) {
  return enumValueConfig;
}
function buildEntityCallbacks(callbacks) {
  return callbacks;
}
function buildAdditionalColumnDelegate(additionalColumnDelegate) {
  return additionalColumnDelegate;
}

const useFirebaseAuthDelegate = ({
  firebaseApp,
  signInOptions
}) => {
  const [loggedUser, setLoggedUser] = useState(void 0);
  const [authProviderError, setAuthProviderError] = useState();
  const [initialLoading, setInitialLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginSkipped, setLoginSkipped] = useState(false);
  function skipLogin() {
    setLoginSkipped(true);
    setLoggedUser(null);
  }
  useEffect(() => {
    if (!firebaseApp)
      return;
    const auth = getAuth(firebaseApp);
    setLoggedUser(auth.currentUser);
    return onAuthStateChanged(auth, updateFirebaseUser, (error) => setAuthProviderError(error));
  }, [firebaseApp]);
  const updateFirebaseUser = async (firebaseUser) => {
    setLoggedUser(firebaseUser);
    setInitialLoading(false);
    setAuthLoading(false);
  };
  function onSignOut() {
    const auth = getAuth(firebaseApp);
    signOut(auth).then((_) => {
      setLoggedUser(null);
      setAuthProviderError(null);
    });
    setLoginSkipped(false);
  }
  const getProviderOptions = (providerId) => {
    return signInOptions.find((option) => {
      if (option === null)
        throw Error("useFirebaseAuthDelegate");
      if (typeof option === "object" && option.provider === providerId)
        return option;
      return void 0;
    });
  };
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    const options = getProviderOptions("google.com");
    if (options?.scopes)
      options.scopes.forEach((scope) => provider.addScope(scope));
    if (options?.customParameters)
      provider.setCustomParameters(options.customParameters);
    const auth = getAuth();
    signInWithPopup(auth, provider).catch(setAuthProviderError);
  };
  function doOauthLogin(auth, provider) {
    setAuthLoading(true);
    signInWithPopup(auth, provider).catch(setAuthProviderError).then(() => setAuthLoading(false));
  }
  const anonymousLogin = () => {
    const auth = getAuth();
    setAuthLoading(true);
    signInAnonymously(auth).catch(setAuthProviderError).then(() => setAuthLoading(false));
  };
  const appleLogin = () => {
    const provider = new OAuthProvider("apple.com");
    const options = getProviderOptions("apple.com");
    if (options?.scopes)
      options.scopes.forEach((scope) => provider.addScope(scope));
    if (options?.customParameters)
      provider.setCustomParameters(options.customParameters);
    const auth = getAuth();
    doOauthLogin(auth, provider);
  };
  const facebookLogin = () => {
    const provider = new FacebookAuthProvider();
    const options = getProviderOptions("facebook.com");
    if (options?.scopes)
      options.scopes.forEach((scope) => provider.addScope(scope));
    if (options?.customParameters)
      provider.setCustomParameters(options.customParameters);
    const auth = getAuth();
    doOauthLogin(auth, provider);
  };
  const githubLogin = () => {
    const provider = new GithubAuthProvider();
    const options = getProviderOptions("github.com");
    if (options?.scopes)
      options.scopes.forEach((scope) => provider.addScope(scope));
    if (options?.customParameters)
      provider.setCustomParameters(options.customParameters);
    const auth = getAuth();
    doOauthLogin(auth, provider);
  };
  const microsoftLogin = () => {
    const provider = new OAuthProvider("microsoft.com");
    const options = getProviderOptions("microsoft.com");
    if (options?.scopes)
      options.scopes.forEach((scope) => provider.addScope(scope));
    if (options?.customParameters)
      provider.setCustomParameters(options.customParameters);
    const auth = getAuth();
    doOauthLogin(auth, provider);
  };
  const twitterLogin = () => {
    const provider = new TwitterAuthProvider();
    const options = getProviderOptions("twitter.com");
    if (options?.customParameters)
      provider.setCustomParameters(options.customParameters);
    const auth = getAuth();
    doOauthLogin(auth, provider);
  };
  const emailPasswordLogin = (email, password) => {
    const auth = getAuth();
    setAuthLoading(true);
    signInWithEmailAndPassword(auth, email, password).catch(setAuthProviderError).then(() => setAuthLoading(false));
  };
  const registerWithPasswordEmail = (email, password) => {
    const auth = getAuth();
    setAuthLoading(true);
    createUserWithEmailAndPassword(auth, email, password).catch(setAuthProviderError).then(() => setAuthLoading(false));
  };
  const getSignInMethodsForEmail = (email) => {
    const auth = getAuth();
    setAuthLoading(true);
    return fetchSignInMethodsForEmail(auth, email).then((res) => {
      setAuthLoading(false);
      return res;
    });
  };
  return {
    user: loggedUser ?? null,
    authError: authProviderError,
    authLoading,
    initialLoading,
    signOut: onSignOut,
    loginSkipped,
    skipLogin,
    googleLogin,
    anonymousLogin,
    appleLogin,
    facebookLogin,
    githubLogin,
    microsoftLogin,
    twitterLogin,
    emailPasswordLogin,
    fetchSignInMethodsForEmail: getSignInMethodsForEmail,
    createUserWithEmailAndPassword: registerWithPasswordEmail
  };
};

function useFirestoreDataSource({
  firebaseApp,
  textSearchController
}) {
  const firestoreRef = useRef();
  const firestore = firestoreRef.current;
  useEffect(() => {
    if (!firebaseApp)
      return;
    firestoreRef.current = getFirestore(firebaseApp);
  }, [firebaseApp]);
  function createEntityFromSchema(doc2, path, resolvedSchema) {
    const values = firestoreToCMSModel(doc2.data());
    const data = doc2.data() ? resolvedSchema.properties ? sanitizeData(values, resolvedSchema.properties) : doc2.data() : void 0;
    return {
      id: doc2.id,
      path: getCMSPathFromFirestorePath(doc2.ref.path),
      values: data
    };
  }
  function buildQuery(path, filter, orderBy$1, order, startAfter$1, limit$1) {
    if (!firestore)
      throw Error("useFirestoreDataSource Firestore not initialised");
    const collectionReference = collection(firestore, path);
    const queryParams = [];
    if (filter) {
      Object.entries(filter).filter(([_, entry]) => !!entry).forEach(([key, filterParameter]) => {
        const [op, value] = filterParameter;
        queryParams.push(where(key, op, cmsToFirestoreModel(value, firestore)));
      });
    }
    if (filter && orderBy$1 && order) {
      Object.entries(filter).forEach(([key, value]) => {
        if (key !== orderBy$1) {
          queryParams.push(orderBy(key, "asc"));
        }
      });
    }
    if (orderBy$1 && order) {
      queryParams.push(orderBy(orderBy$1, order));
    }
    if (startAfter$1) {
      queryParams.push(startAfter(startAfter$1));
    }
    if (limit$1) {
      queryParams.push(limit(limit$1));
    }
    return query(collectionReference, ...queryParams);
  }
  function getAndBuildEntity(path, entityId, schema) {
    if (!firestore)
      throw Error("useFirestoreDataSource Firestore not initialised");
    return getDoc(doc(firestore, path, entityId)).then((docSnapshot) => {
      const resolvedSchema = computeSchema({
        schemaOrResolver: schema,
        entityId: docSnapshot.id,
        path
      });
      return createEntityFromSchema(docSnapshot, path, resolvedSchema);
    });
  }
  async function performTextSearch(path, searchString, schema) {
    if (!textSearchController)
      throw Error("Trying to make text search without specifying a FirestoreTextSearchController");
    const ids = await textSearchController({
      path,
      searchString
    });
    if (ids === void 0)
      throw Error("The current path is not supported by the specified FirestoreTextSearchController");
    const promises = ids.map(async (entityId) => {
      try {
        return await getAndBuildEntity(path, entityId, schema);
      } catch (e) {
        console.error(e);
        return null;
      }
    });
    return Promise.all(promises).then((res) => res.filter((e) => e !== null && e.values));
  }
  return {
    fetchCollection({
      path,
      schema,
      filter,
      limit,
      startAfter,
      searchString,
      orderBy,
      order
    }) {
      if (searchString) {
        return performTextSearch(path, searchString, schema);
      }
      console.debug("Fetching collection", path, limit, filter, startAfter, orderBy, order);
      const query2 = buildQuery(path, filter, orderBy, order, startAfter, limit);
      const resolvedSchema = computeSchema({
        schemaOrResolver: schema,
        path
      });
      return getDocs(query2).then((snapshot) => snapshot.docs.map((doc2) => createEntityFromSchema(doc2, path, resolvedSchema)));
    },
    listenCollection({
      path,
      schema,
      filter,
      limit,
      startAfter,
      searchString,
      orderBy,
      order,
      onUpdate,
      onError
    }) {
      console.debug("Listening collection", path, limit, filter, startAfter, orderBy, order);
      const query2 = buildQuery(path, filter, orderBy, order, startAfter, limit);
      if (searchString) {
        performTextSearch(path, searchString, schema).then(onUpdate).catch((e) => {
          if (onError)
            onError(e);
        });
        return () => {
        };
      }
      const resolvedSchema = computeSchema({
        schemaOrResolver: schema,
        path
      });
      return onSnapshot(query2, {
        next: (snapshot) => {
          onUpdate(snapshot.docs.map((doc2) => createEntityFromSchema(doc2, path, resolvedSchema)));
        },
        error: onError
      });
    },
    fetchEntity({
      path,
      entityId,
      schema
    }) {
      return getAndBuildEntity(path, entityId, schema);
    },
    listenEntity({
      path,
      entityId,
      schema,
      onUpdate,
      onError
    }) {
      if (!firestore)
        throw Error("useFirestoreDataSource Firestore not initialised");
      return onSnapshot(doc(firestore, path, entityId), {
        next: (docSnapshot) => {
          const resolvedSchema = computeSchema({
            schemaOrResolver: schema,
            entityId: docSnapshot.id,
            path
          });
          onUpdate(createEntityFromSchema(docSnapshot, path, resolvedSchema));
        },
        error: onError
      });
    },
    saveEntity: async function({
      path,
      entityId,
      values,
      schema,
      status
    }) {
      if (!firestore)
        throw Error("useFirestoreDataSource Firestore not initialised");
      const resolvedSchema = computeSchema({
        schemaOrResolver: schema,
        entityId,
        path
      });
      const properties = resolvedSchema.properties;
      const collectionReference = collection(firestore, path);
      const updatedFirestoreValues = updateAutoValues({
        inputValues: values,
        properties,
        status,
        timestampNowValue: serverTimestamp(),
        referenceConverter: (value) => doc(firestore, value.path, value.id),
        geopointConverter: (value) => new GeoPoint$1(value.latitude, value.longitude)
      });
      console.debug("Saving entity", path, entityId, updatedFirestoreValues);
      let documentReference;
      if (entityId)
        documentReference = doc(collectionReference, entityId);
      else
        documentReference = doc(collectionReference);
      return setDoc(documentReference, updatedFirestoreValues, {
        merge: true
      }).then(() => ({
        id: documentReference.id,
        path: documentReference.path,
        values: firestoreToCMSModel(updatedFirestoreValues)
      }));
    },
    async deleteEntity({
      entity
    }) {
      if (!firestore)
        throw Error("useFirestoreDataSource Firestore not initialised");
      return deleteDoc(doc(firestore, entity.path, entity.id));
    },
    checkUniqueField(path, name, value, property, entityId) {
      if (!firestore)
        throw Error("useFirestoreDataSource Firestore not initialised");
      console.debug("Check unique field entity", path, name, value, entityId);
      if (property.dataType === "array") {
        console.error("checkUniqueField received an array");
      }
      if (value === void 0 || value === null) {
        return Promise.resolve(true);
      }
      const q = query(collection(firestore, path), where(name, "==", value));
      return getDocs(q).then((snapshots) => snapshots.docs.filter((doc2) => doc2.id !== entityId).length === 0);
    }
  };
}
function firestoreToCMSModel(data) {
  const traverse = (input) => {
    if (input == null)
      return input;
    if (serverTimestamp().isEqual(input)) {
      return null;
    }
    if (input instanceof Timestamp) {
      return input.toDate();
    }
    if (input instanceof GeoPoint) {
      return new GeoPoint(input.latitude, input.longitude);
    }
    if (input instanceof DocumentReference) {
      return new EntityReference(input.id, getCMSPathFromFirestorePath(input.path));
    }
    if (Array.isArray(input)) {
      return input.map(traverse);
    }
    if (typeof input === "object") {
      const result = {};
      for (const key of Object.keys(input)) {
        result[key] = traverse(input[key]);
      }
      return result;
    }
    return input;
  };
  return traverse(data);
}
function cmsToFirestoreModel(data, firestore) {
  if (Array.isArray(data)) {
    return data.map((v) => cmsToFirestoreModel(v, firestore));
  } else if (data instanceof EntityReference) {
    return doc(firestore, data.path, data.id);
  } else if (data instanceof GeoPoint) {
    return new GeoPoint$1(data.latitude, data.longitude);
  } else if (typeof data === "object") {
    return Object.entries(data).map(([key, v]) => ({
      [key]: cmsToFirestoreModel(v, firestore)
    })).reduce((a, b) => ({
      ...a,
      ...b
    }), {});
  }
  return data;
}
function getCMSPathFromFirestorePath(fsPath) {
  let to = fsPath.lastIndexOf("/");
  to = to === -1 ? fsPath.length : to;
  return fsPath.substring(0, to);
}

function useFirebaseStorageSource({
  firebaseApp
}) {
  const [storage, setStorage] = useState();
  useEffect(() => {
    if (!firebaseApp)
      return;
    setStorage(getStorage(firebaseApp));
  }, [firebaseApp]);
  const urlsCache = {};
  return {
    uploadFile({
      file,
      fileName,
      path,
      metadata
    }) {
      if (!storage)
        throw Error("useFirebaseStorageSource Firebase not initialised");
      const usedFilename = fileName ?? file.name;
      console.debug("Uploading file", usedFilename, file, path, metadata);
      return uploadBytes(ref(storage, `${path}/${usedFilename}`), file, metadata).then((snapshot) => ({
        path: snapshot.ref.fullPath
      }));
    },
    getDownloadURL(storagePath) {
      if (!storage)
        throw Error("useFirebaseStorageSource Firebase not initialised");
      if (urlsCache[storagePath])
        return urlsCache[storagePath];
      const downloadURL = getDownloadURL(ref(storage, storagePath));
      urlsCache[storagePath] = downloadURL;
      return downloadURL;
    }
  };
}

function useInitialiseFirebase({
  firebaseConfig,
  onFirebaseInit
}) {
  const [firebaseApp, setFirebaseApp] = React__default.useState();
  const [firebaseConfigLoading, setFirebaseConfigLoading] = React__default.useState(false);
  const [configError, setConfigError] = React__default.useState();
  const [firebaseConfigError, setFirebaseConfigError] = React__default.useState();
  const initFirebase = useCallback((config) => {
    try {
      const initialisedFirebaseApp = initializeApp(config);
      setFirebaseConfigError(void 0);
      setFirebaseConfigLoading(false);
      if (onFirebaseInit)
        onFirebaseInit(config);
      setFirebaseApp(initialisedFirebaseApp);
    } catch (e) {
      console.error(e);
      setFirebaseConfigError(e);
    }
  }, [onFirebaseInit]);
  useEffect(() => {
    setFirebaseConfigLoading(true);
    if (firebaseConfig) {
      console.log("Using specified config", firebaseConfig);
      initFirebase(firebaseConfig);
    } else {
      fetch("/__/firebase/init.json").then(async (response) => {
        console.debug("Firebase init response", response.status);
        if (response && response.status < 300) {
          const config = await response.json();
          console.log("Using configuration fetched from Firebase Hosting", config);
          initFirebase(config);
        }
      }).catch((e) => {
        setFirebaseConfigLoading(false);
        setConfigError("Could not load Firebase configuration from Firebase hosting. If the app is not deployed in Firebase hosting, you need to specify the configuration manually" + e.toString());
      });
    }
  }, [firebaseConfig, initFirebase]);
  return {
    firebaseApp,
    firebaseConfigLoading,
    configError,
    firebaseConfigError
  };
}

const googleIcon = (mode) => /* @__PURE__ */ jsx(Fragment, {
  children: /* @__PURE__ */ jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    width: 32,
    height: 32,
    children: [/* @__PURE__ */ jsxs("linearGradient", {
      id: "95yY7w43Oj6n2vH63j6HJb",
      x1: "29.401",
      x2: "29.401",
      y1: "4.064",
      y2: "106.734",
      gradientTransform: "matrix(1 0 0 -1 0 66)",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: "0",
        stopColor: "#ff5840"
      }), /* @__PURE__ */ jsx("stop", {
        offset: ".007",
        stopColor: "#ff5840"
      }), /* @__PURE__ */ jsx("stop", {
        offset: ".989",
        stopColor: "#fa528c"
      }), /* @__PURE__ */ jsx("stop", {
        offset: "1",
        stopColor: "#fa528c"
      })]
    }), /* @__PURE__ */ jsx("path", {
      fill: "url(#95yY7w43Oj6n2vH63j6HJb)",
      d: "M47.46,15.5l-1.37,1.48c-1.34,1.44-3.5,1.67-5.15,0.6c-2.71-1.75-6.43-3.13-11-2.37 c-4.94,0.83-9.17,3.85-11.64, 7.97l-8.03-6.08C14.99,9.82,23.2,5,32.5,5c5,0,9.94,1.56,14.27,4.46 C48.81,10.83,49.13,13.71,47.46,15.5z"
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "95yY7w43Oj6n2vH63j6HJc",
      x1: "12.148",
      x2: "12.148",
      y1: ".872",
      y2: "47.812",
      gradientTransform: "matrix(1 0 0 -1 0 66)",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: "0",
        stopColor: "#feaa53"
      }), /* @__PURE__ */ jsx("stop", {
        offset: ".612",
        stopColor: "#ffcd49"
      }), /* @__PURE__ */ jsx("stop", {
        offset: "1",
        stopColor: "#ffde44"
      })]
    }), /* @__PURE__ */ jsx("path", {
      fill: "url(#95yY7w43Oj6n2vH63j6HJc)",
      d: "M16.01,30.91c-0.09,2.47,0.37,4.83,1.27,6.96l-8.21,6.05c-1.35-2.51-2.3-5.28-2.75-8.22 c-1.06-6.88,0.54-13.38, 3.95-18.6l8.03,6.08C16.93,25.47,16.1,28.11,16.01,30.91z"
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "95yY7w43Oj6n2vH63j6HJd",
      x1: "29.76",
      x2: "29.76",
      y1: "32.149",
      y2: "-6.939",
      gradientTransform: "matrix(1 0 0 -1 0 66)",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: "0",
        stopColor: "#42d778"
      }), /* @__PURE__ */ jsx("stop", {
        offset: ".428",
        stopColor: "#3dca76"
      }), /* @__PURE__ */ jsx("stop", {
        offset: "1",
        stopColor: "#34b171"
      })]
    }), /* @__PURE__ */ jsx("path", {
      fill: "url(#95yY7w43Oj6n2vH63j6HJd)",
      d: "M50.45,51.28c-4.55,4.07-10.61,6.57-17.36,6.71C22.91,58.2,13.66,52.53,9.07,43.92l8.21-6.05 C19.78,43.81, 25.67,48,32.5,48c3.94,0,7.52-1.28,10.33-3.44L50.45,51.28z"
    }), /* @__PURE__ */ jsxs("linearGradient", {
      id: "95yY7w43Oj6n2vH63j6HJe",
      x1: "46",
      x2: "46",
      y1: "3.638",
      y2: "35.593",
      gradientTransform: "matrix(1 0 0 -1 0 66)",
      gradientUnits: "userSpaceOnUse",
      children: [/* @__PURE__ */ jsx("stop", {
        offset: "0",
        stopColor: "#155cde"
      }), /* @__PURE__ */ jsx("stop", {
        offset: ".278",
        stopColor: "#1f7fe5"
      }), /* @__PURE__ */ jsx("stop", {
        offset: ".569",
        stopColor: "#279ceb"
      }), /* @__PURE__ */ jsx("stop", {
        offset: ".82",
        stopColor: "#2cafef"
      }), /* @__PURE__ */ jsx("stop", {
        offset: "1",
        stopColor: "#2eb5f0"
      })]
    }), /* @__PURE__ */ jsx("path", {
      fill: "url(#95yY7w43Oj6n2vH63j6HJe)",
      d: "M59,31.97c0.01,7.73-3.26,14.58-8.55,19.31l-7.62-6.72c2.1-1.61,3.77-3.71,4.84-6.15 c0.29-0.66-0.2-1.41-0.92-1.41H37c-2.21,0-4-1.79-4-4v-2c0-2.21,1.79-4,4-4h17C56.75,27,59,29.22,59,31.97z"
    })]
  })
});
const appleIcon = (mode) => /* @__PURE__ */ jsx("svg", {
  width: 32,
  height: 32,
  viewBox: "0 0 56 56",
  style: {
    transform: "scale(2.8)"
  },
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ jsx("g", {
    stroke: mode === "light" ? "#424245" : "white",
    strokeWidth: "0.5",
    fillRule: "evenodd",
    children: /* @__PURE__ */ jsx("path", {
      d: "M28.2226562,20.3846154 C29.0546875,20.3846154 30.0976562,19.8048315 30.71875,19.0317864 C31.28125,18.3312142 31.6914062,17.352829 31.6914062,16.3744437 C31.6914062,16.2415766 31.6796875,16.1087095 31.65625,16 C30.7304687,16.0362365 29.6171875,16.640178 28.9492187,17.4494596 C28.421875,18.06548 27.9414062,19.0317864 27.9414062,20.0222505 C27.9414062,20.1671964 27.9648438,20.3121424 27.9765625,20.3604577 C28.0351562,20.3725366 28.1289062,20.3846154 28.2226562,20.3846154 Z M25.2929688,35 C26.4296875,35 26.9335938,34.214876 28.3515625,34.214876 C29.7929688,34.214876 30.109375,34.9758423 31.375,34.9758423 C32.6171875,34.9758423 33.4492188,33.792117 34.234375,32.6325493 C35.1132812,31.3038779 35.4765625,29.9993643 35.5,29.9389701 C35.4179688,29.9148125 33.0390625,28.9122695 33.0390625,26.0979021 C33.0390625,23.6579784 34.9140625,22.5588048 35.0195312,22.474253 C33.7773438,20.6382708 31.890625,20.5899555 31.375,20.5899555 C29.9804688,20.5899555 28.84375,21.4596313 28.1289062,21.4596313 C27.3554688,21.4596313 26.3359375,20.6382708 25.1289062,20.6382708 C22.8320312,20.6382708 20.5,22.5950413 20.5,26.2911634 C20.5,28.5861411 21.3671875,31.013986 22.4335938,32.5842339 C23.3476562,33.9129053 24.1445312,35 25.2929688,35 Z",
      fill: mode === "light" ? "#424245" : "white",
      fillRule: "nonzero"
    })
  })
});
const githubIcon = (mode) => /* @__PURE__ */ jsx("svg", {
  fill: mode === "light" ? "#1c1e21" : "white",
  role: "img",
  viewBox: "0 0 24 24",
  width: 28,
  height: 28,
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ jsx("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  })
});
const facebookIcon = (mode) => /* @__PURE__ */ jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 28,
  height: 28,
  viewBox: "0 0 90 90",
  children: /* @__PURE__ */ jsx("g", {
    children: /* @__PURE__ */ jsx("path", {
      d: "M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z",
      fill: mode === "light" ? "#39569c" : "white"
    })
  })
});
const microsoftIcon = (mode) => /* @__PURE__ */ jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 28,
  height: 28,
  viewBox: "0 0 480 480",
  children: /* @__PURE__ */ jsx("g", {
    children: /* @__PURE__ */ jsx("path", {
      d: "M0.176,224L0.001,67.963l192-26.072V224H0.176z M224.001,37.241L479.937,0v224H224.001V37.241z M479.999,256l-0.062,224   l-255.936-36.008V256H479.999z M192.001,439.918L0.157,413.621L0.147,256h191.854V439.918z",
      fill: mode === "light" ? "#00a2ed" : "white"
    })
  })
});
const twitterIcon = (mode) => /* @__PURE__ */ jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ jsx("path", {
    fill: mode === "light" ? "#00acee" : "white",
    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
  })
});

const useStyles = makeStyles((theme) => createStyles({
  logo: {
    padding: theme.spacing(3),
    width: 260,
    height: 260
  }
}));
function FirebaseLoginView({
  allowSkipLogin,
  logo,
  signInOptions,
  firebaseApp,
  authDelegate,
  NoUserComponent,
  disableSignupScreen = false
}) {
  const classes = useStyles();
  const authController = useAuthController();
  const modeState = useModeState();
  const [passwordLoginSelected, setPasswordLoginSelected] = useState(false);
  const resolvedSignInOptions = signInOptions.map((o) => {
    if (typeof o === "object") {
      return o.provider;
    } else
      return o;
  });
  function buildErrorView() {
    let errorView;
    const ignoredCodes = ["auth/popup-closed-by-user", "auth/cancelled-popup-request"];
    if (authDelegate.authError) {
      if (authDelegate.authError.code === "auth/operation-not-allowed") {
        errorView = /* @__PURE__ */ jsxs(Fragment, {
          children: [/* @__PURE__ */ jsx(Box, {
            p: 1,
            children: /* @__PURE__ */ jsx(ErrorView, {
              error: "You need to enable the corresponding login provider in your Firebase project"
            })
          }), firebaseApp && /* @__PURE__ */ jsx(Box, {
            p: 1,
            children: /* @__PURE__ */ jsx("a", {
              href: `https://console.firebase.google.com/project/${firebaseApp.options.projectId}/authentication/providers`,
              rel: "noopener noreferrer",
              target: "_blank",
              children: /* @__PURE__ */ jsx(Button, {
                variant: "text",
                color: "primary",
                children: "Open Firebase configuration"
              })
            })
          })]
        });
      } else if (!ignoredCodes.includes(authDelegate.authError.code)) {
        console.error(authDelegate.authError);
        errorView = /* @__PURE__ */ jsx(Box, {
          p: 1,
          children: /* @__PURE__ */ jsx(ErrorView, {
            error: authDelegate.authError.message
          })
        });
      }
    }
    return errorView;
  }
  let logoComponent;
  if (logo) {
    logoComponent = /* @__PURE__ */ jsx("img", {
      className: classes.logo,
      src: logo,
      alt: "Logo"
    });
  } else {
    logoComponent = /* @__PURE__ */ jsx("div", {
      className: classes.logo,
      children: /* @__PURE__ */ jsx(FireCMSLogo, {})
    });
  }
  let notAllowedMessage;
  if (authController.notAllowedError) {
    if (typeof authController.notAllowedError === "string") {
      notAllowedMessage = authController.notAllowedError;
    } else if (authController.notAllowedError instanceof Error) {
      notAllowedMessage = authController.notAllowedError.message;
    } else {
      notAllowedMessage = "It looks like you don't have access to the CMS, based on the specified Authenticator configuration";
    }
  }
  return /* @__PURE__ */ jsx(Fade, {
    in: true,
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    children: /* @__PURE__ */ jsx(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 2
      },
      children: /* @__PURE__ */ jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 340
        },
        children: [/* @__PURE__ */ jsx(Box, {
          m: 1,
          children: logoComponent
        }), notAllowedMessage && /* @__PURE__ */ jsx(Box, {
          p: 2,
          children: /* @__PURE__ */ jsx(ErrorView, {
            error: notAllowedMessage
          })
        }), buildErrorView(), !passwordLoginSelected && /* @__PURE__ */ jsxs(Fragment, {
          children: [buildOauthLoginButtons(authDelegate, resolvedSignInOptions, modeState.mode), resolvedSignInOptions.includes("password") && /* @__PURE__ */ jsx(LoginButton, {
            text: "Email/password",
            icon: /* @__PURE__ */ jsx(EmailIcon, {
              fontSize: "large"
            }),
            onClick: () => setPasswordLoginSelected(true)
          }), resolvedSignInOptions.includes("anonymous") && /* @__PURE__ */ jsx(LoginButton, {
            text: "Log in anonymously",
            icon: /* @__PURE__ */ jsx(PersonOutlineIcon, {
              fontSize: "large"
            }),
            onClick: authDelegate.anonymousLogin
          }), allowSkipLogin && /* @__PURE__ */ jsx(Box, {
            m: 1,
            children: /* @__PURE__ */ jsx(Button, {
              onClick: authDelegate.skipLogin,
              children: "Skip login"
            })
          })]
        }), passwordLoginSelected && /* @__PURE__ */ jsx(LoginForm, {
          authDelegate,
          onClose: () => setPasswordLoginSelected(false),
          mode: modeState.mode,
          NoUserComponent,
          disableSignupScreen
        })]
      })
    })
  });
}
function LoginButton({
  icon,
  onClick,
  text
}) {
  return /* @__PURE__ */ jsx(Box, {
    m: 0.5,
    width: "100%",
    children: /* @__PURE__ */ jsx(Button, {
      fullWidth: true,
      variant: "outlined",
      onClick,
      children: /* @__PURE__ */ jsxs(Box, {
        sx: {
          p: "1",
          display: "flex",
          width: "240px",
          height: "32px",
          alignItems: "center",
          justifyItems: "center"
        },
        children: [/* @__PURE__ */ jsx(Box, {
          sx: {
            display: "flex",
            flexDirection: "column",
            width: "32px",
            alignItems: "center",
            justifyItems: "center"
          },
          children: icon
        }), /* @__PURE__ */ jsx(Box, {
          sx: {
            flexGrow: 1,
            pl: 2,
            textAlign: "center"
          },
          children: text
        })]
      })
    })
  });
}
function LoginForm({
  onClose,
  authDelegate,
  mode,
  NoUserComponent,
  disableSignupScreen
}) {
  const passwordRef = useRef(null);
  const [email, setEmail] = useState();
  const [availableProviders, setAvailableProviders] = useState();
  const [password, setPassword] = useState();
  const shouldShowEmail = availableProviders === void 0;
  const loginMode = availableProviders && availableProviders.includes("password");
  const otherProvidersMode = availableProviders && !availableProviders.includes("password") && availableProviders.length > 0;
  const registrationMode = availableProviders && !availableProviders.includes("password");
  useEffect(() => {
    console.log("loginMode", loginMode);
    if ((loginMode || registrationMode) && passwordRef.current) {
      passwordRef.current.focus();
    }
  }, [loginMode, registrationMode]);
  useEffect(() => {
    if (!document)
      return;
    const escFunction = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [document]);
  function handleEnterEmail() {
    if (email) {
      authDelegate.fetchSignInMethodsForEmail(email).then((availableProviders2) => {
        console.log(availableProviders2);
        setAvailableProviders(availableProviders2);
      });
    }
  }
  function handleEnterPassword() {
    if (email && password) {
      authDelegate.emailPasswordLogin(email, password);
    }
  }
  function handleRegistration() {
    if (email && password) {
      authDelegate.createUserWithEmailAndPassword(email, password);
    }
  }
  const onBackPressed = () => {
    if (shouldShowEmail) {
      onClose();
    } else {
      setAvailableProviders(void 0);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (shouldShowEmail) {
      handleEnterEmail();
    } else if (loginMode) {
      handleEnterPassword();
    } else if (registrationMode) {
      handleRegistration();
    }
  };
  const label = registrationMode ? "No user found with that email. Pick a password to create a new account" : loginMode ? "Please enter your password" : "Please enter your email";
  const button = registrationMode ? "Create account" : loginMode ? "Login" : "Ok";
  if (otherProvidersMode) {
    return /* @__PURE__ */ jsxs(Grid, {
      container: true,
      spacing: 1,
      children: [/* @__PURE__ */ jsx(Grid, {
        item: true,
        xs: 12,
        children: /* @__PURE__ */ jsx(IconButton, {
          onClick: onBackPressed,
          children: /* @__PURE__ */ jsx(ArrowBackIcon, {
            sx: {
              width: 20,
              height: 20
            }
          })
        })
      }), /* @__PURE__ */ jsxs(Grid, {
        item: true,
        xs: 12,
        sx: {
          p: 1
        },
        children: [/* @__PURE__ */ jsx(Typography, {
          align: "center",
          variant: "subtitle2",
          children: "You already have an account"
        }), /* @__PURE__ */ jsxs(Typography, {
          align: "center",
          variant: "body2",
          children: ["You can use one of these methods to login with ", email]
        })]
      }), /* @__PURE__ */ jsx(Grid, {
        item: true,
        xs: 12,
        children: availableProviders && buildOauthLoginButtons(authDelegate, availableProviders, mode)
      })]
    });
  }
  return /* @__PURE__ */ jsx(Slide, {
    direction: "up",
    in: true,
    mountOnEnter: true,
    unmountOnExit: true,
    children: /* @__PURE__ */ jsx("form", {
      onSubmit: handleSubmit,
      children: /* @__PURE__ */ jsxs(Grid, {
        container: true,
        spacing: 1,
        children: [/* @__PURE__ */ jsx(Grid, {
          item: true,
          xs: 12,
          children: /* @__PURE__ */ jsx(IconButton, {
            onClick: onBackPressed,
            children: /* @__PURE__ */ jsx(ArrowBackIcon, {
              sx: {
                width: 20,
                height: 20
              }
            })
          })
        }), /* @__PURE__ */ jsx(Grid, {
          item: true,
          xs: 12,
          sx: {
            p: 1,
            display: registrationMode && disableSignupScreen ? "none" : "flex"
          },
          children: /* @__PURE__ */ jsx(Typography, {
            align: "center",
            variant: "subtitle2",
            children: label
          })
        }), /* @__PURE__ */ jsx(Grid, {
          item: true,
          xs: 12,
          sx: {
            display: shouldShowEmail ? "inherit" : "none"
          },
          children: /* @__PURE__ */ jsx(TextField$1, {
            placeholder: "Email",
            fullWidth: true,
            autoFocus: true,
            value: email,
            disabled: authDelegate.authLoading,
            type: "email",
            onChange: (event) => setEmail(event.target.value)
          })
        }), /* @__PURE__ */ jsx(Grid, {
          item: true,
          xs: 12,
          children: registrationMode && NoUserComponent
        }), /* @__PURE__ */ jsx(Grid, {
          item: true,
          xs: 12,
          sx: {
            display: loginMode || registrationMode && !disableSignupScreen ? "inherit" : "none"
          },
          children: /* @__PURE__ */ jsx(TextField$1, {
            placeholder: "Password",
            fullWidth: true,
            value: password,
            disabled: authDelegate.authLoading,
            inputRef: passwordRef,
            type: "password",
            onChange: (event) => setPassword(event.target.value)
          })
        }), /* @__PURE__ */ jsx(Grid, {
          item: true,
          xs: 12,
          children: /* @__PURE__ */ jsxs(Box, {
            sx: {
              display: registrationMode && disableSignupScreen ? "none" : "flex",
              justifyContent: "end",
              alignItems: "center",
              width: "100%"
            },
            children: [authDelegate.authLoading && /* @__PURE__ */ jsx(CircularProgress, {
              sx: {
                p: 1
              },
              size: 16,
              thickness: 8
            }), /* @__PURE__ */ jsx(Button, {
              type: "submit",
              children: button
            })]
          })
        })]
      })
    })
  });
}
function buildOauthLoginButtons(authDelegate, providers, mode) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [providers.includes("google.com") && /* @__PURE__ */ jsx(LoginButton, {
      text: "Sign in with Google",
      icon: googleIcon(),
      onClick: authDelegate.googleLogin
    }), providers.includes("microsoft.com") && /* @__PURE__ */ jsx(LoginButton, {
      text: "Sign in with Microsoft",
      icon: microsoftIcon(mode),
      onClick: authDelegate.microsoftLogin
    }), providers.includes("apple.com") && /* @__PURE__ */ jsx(LoginButton, {
      text: "Sign in with Apple",
      icon: appleIcon(mode),
      onClick: authDelegate.appleLogin
    }), providers.includes("github.com") && /* @__PURE__ */ jsx(LoginButton, {
      text: "Sign in with Github",
      icon: githubIcon(mode),
      onClick: authDelegate.githubLogin
    }), providers.includes("facebook.com") && /* @__PURE__ */ jsx(LoginButton, {
      text: "Sign in with Facebook",
      icon: facebookIcon(mode),
      onClick: authDelegate.facebookLogin
    }), providers.includes("twitter.com") && /* @__PURE__ */ jsx(LoginButton, {
      text: "Sign in with Twitter",
      icon: twitterIcon(mode),
      onClick: authDelegate.twitterLogin
    })]
  });
}

const DEFAULT_SIGN_IN_OPTIONS = [GoogleAuthProvider.PROVIDER_ID];
function FirebaseCMSApp({
  name,
  logo,
  toolbarExtraWidget,
  authentication,
  schemaOverrideHandler,
  navigation,
  textSearchController,
  allowSkipLogin,
  signInOptions = DEFAULT_SIGN_IN_OPTIONS,
  firebaseConfig,
  onFirebaseInit,
  primaryColor,
  secondaryColor,
  fontFamily,
  dateTimeFormat,
  locale,
  HomePage,
  basePath,
  baseCollectionPath,
  LoginViewProps
}) {
  const {
    firebaseApp,
    firebaseConfigLoading,
    configError,
    firebaseConfigError
  } = useInitialiseFirebase({
    onFirebaseInit,
    firebaseConfig
  });
  const authDelegate = useFirebaseAuthDelegate({
    firebaseApp,
    signInOptions
  });
  const dataSource = useFirestoreDataSource({
    firebaseApp,
    textSearchController
  });
  const storageSource = useFirebaseStorageSource({
    firebaseApp
  });
  if (configError) {
    return /* @__PURE__ */ jsxs("div", {
      children: [" ", configError, " "]
    });
  }
  if (firebaseConfigError) {
    return /* @__PURE__ */ jsx("div", {
      children: "It seems like the provided Firebase config is not correct. If you are using the credentials provided automatically by Firebase Hosting, make sure you link your Firebase app to Firebase Hosting."
    });
  }
  if (firebaseConfigLoading || !firebaseApp) {
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsx(CssBaseline, {}), /* @__PURE__ */ jsx(CircularProgressCenter, {})]
    });
  }
  return /* @__PURE__ */ jsx(BrowserRouter, {
    basename: basePath,
    children: /* @__PURE__ */ jsx(FireCMS, {
      navigation,
      authDelegate,
      authentication,
      schemaOverrideHandler,
      dateTimeFormat,
      dataSource,
      storageSource,
      entityLinkBuilder: ({
        entity
      }) => `https://console.firebase.google.com/project/${firebaseApp.options.projectId}/firestore/data/${entity.path}/${entity.id}`,
      locale,
      basePath,
      baseCollectionPath,
      children: ({
        context,
        mode,
        loading
      }) => {
        const theme = createCMSDefaultTheme({
          mode,
          primaryColor,
          secondaryColor,
          fontFamily
        });
        let component;
        if (loading) {
          component = /* @__PURE__ */ jsx(CircularProgressCenter, {});
        } else if (!context.authController.canAccessMainView) {
          component = /* @__PURE__ */ jsx(FirebaseLoginView, {
            logo,
            allowSkipLogin,
            signInOptions: signInOptions ?? DEFAULT_SIGN_IN_OPTIONS,
            firebaseApp,
            authDelegate,
            ...LoginViewProps
          });
        } else {
          component = /* @__PURE__ */ jsxs(Scaffold, {
            name,
            logo,
            toolbarExtraWidget,
            children: [/* @__PURE__ */ jsx(NavigationRoutes, {
              HomePage
            }), /* @__PURE__ */ jsx(SideEntityDialogs, {})]
          });
        }
        return /* @__PURE__ */ jsxs(ThemeProvider, {
          theme,
          children: [/* @__PURE__ */ jsx(CssBaseline, {}), component]
        });
      }
    })
  });
}

function performAlgoliaTextSearch(index, query) {
  console.log("Performing Algolia query", index, query);
  return index.search(query).then(({
    hits
  }) => {
    return hits.map((hit) => hit.objectID);
  }).catch((err) => {
    console.log(err);
    return [];
  });
}

export { ArrayContainer, ArrayDefaultField, ArrayEnumPreview, ArrayEnumSelect, ArrayOfMapsPreview, ArrayOfReferencesField, ArrayOfReferencesPreview, ArrayOfStorageComponentsPreview, ArrayOfStringsPreview, ArrayOneOfField, ArrayOneOfPreview, ArrayPreview, ArrayPropertyEnumPreview, AsyncPreviewComponent, BooleanPreview, CircularProgressCenter, CollectionTable, CustomChip, DateTimeField, Drawer, EmptyValue, EntityCollectionView$1 as EntityCollectionView, EntityForm$1 as EntityForm, EntityPreview$1 as EntityPreview, EntityReference, ErrorView, FieldDescription, FireCMS, FireCMSHomePage, FirebaseCMSApp, FirebaseLoginView, GeoPoint, ImagePreview, LabelWithIcon, MapField, MapPreview, Markdown, MarkdownField, NavigationRoutes, NumberPreview, PreviewComponent, ReadOnlyField, ReferenceDialog, ReferenceField, ReferencePreview, Scaffold, Select, SideEntityDialogs, SkeletonComponent, StorageThumbnail, StorageUploadField, StringPreview, SwitchField, Table, TextField, TimestampPreview, UrlComponentPreview, buildAdditionalColumnDelegate, buildCollection, buildEntityCallbacks, buildEnumValueConfig, buildEnumValues, buildNavigation, buildProperties, buildPropertiesOrBuilder, buildProperty, buildPropertyField, buildSchema, createCMSDefaultTheme, deleteEntityWithCallbacks, performAlgoliaTextSearch, resolveNavigationFrom, saveEntityWithCallbacks, useAuthController, useClearRestoreValue, useClipboard, useCollectionFetch, useDataSource, useEntityFetch, useFireCMSContext, useFirebaseAuthDelegate, useFirebaseStorageSource, useFirestoreDataSource, useInitialiseFirebase, useModeState, useNavigation, useResolvedNavigationFrom, useSelectionController, useSideEntityController, useSnackbarController, useStorageSource };
//# sourceMappingURL=index.es.js.map
