# Language utility functions for TalkFlow backend

LANGUAGES = {
    'ja': {'name': 'Japanese', 'flag': '🇯🇵', 'native_name': '日本語'},
    'es': {'name': 'Spanish', 'flag': '🇪🇸', 'native_name': 'Español'},
    'fr': {'name': 'French', 'flag': '🇫🇷', 'native_name': 'Français'},
    'de': {'name': 'German', 'flag': '🇩🇪', 'native_name': 'Deutsch'},
    'zh': {'name': 'Chinese', 'flag': '🇨🇳', 'native_name': '中文'},
    'ru': {'name': 'Russian', 'flag': '🇷🇺', 'native_name': 'Русский'},
    'ar': {'name': 'Arabic', 'flag': '🇸🇦', 'native_name': 'العربية'},
    'ko': {'name': 'Korean', 'flag': '🇰🇷', 'native_name': '한국어'}
}

def get_language_name(code):
    """Get language name by code"""
    return LANGUAGES.get(code, {}).get('name', 'Japanese')

def get_language_native_name(code):
    """Get language native name by code"""
    return LANGUAGES.get(code, {}).get('native_name', '日本語')

def get_language_flag(code):
    """Get language flag by code"""
    return LANGUAGES.get(code, {}).get('flag', '🇯🇵')

def get_language_info(code):
    """Get complete language info by code"""
    return LANGUAGES.get(code, LANGUAGES['ja'])

def get_all_language_codes():
    """Get all language codes"""
    return list(LANGUAGES.keys())

def get_all_language_names():
    """Get all language names"""
    return [lang['name'] for lang in LANGUAGES.values()]
