!macro customInstall
  !define MUI_FINISHPAGE_RUN "$INSTDIR\TurboPi.exe"
  !define MUI_FINISHPAGE_RUN_TEXT "Run TurboPi"
  !insertmacro MUI_PAGE_FINISH
!macroend