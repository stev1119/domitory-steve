// config/constants.js - 시스템 상수 정의
const DORMITORY_CONFIG = {
    // 기숙사 건물 정보
    BUILDINGS: {
        A: { name: 'A동', gender: 'male', floors: [1, 2, 3, 4] },
        B: { name: 'B동', gender: 'male', floors: [1, 2, 3, 4] },
        C: { name: 'C동', gender: 'male', floors: [1, 2, 3, 4] },
        D: { name: 'D동', gender: 'female', floors: [1, 2, 3, 4] },
        E: { name: 'E동', gender: 'female', floors: [1, 2, 3, 4] },
        F: { name: 'F동', gender: 'male', floors: [1, 2, 3, 4] }
    },

    // 호실 범위 정의
    ROOM_RANGES: {
        A: {
            1: { start: 101, end: 160, type: 'single' },
            2: { start: 201, end: 262, type: 'single' },
            3: { start: 301, end: 362, type: 'single' },
            4: { start: 401, end: 432, type: 'triple' }
        },
        B: {
            1: { start: 101, end: 140, type: 'single' },
            2: { start: 201, end: 241, type: 'single' },
            3: { start: 301, end: 341, type: 'single' },
            4: { start: 401, end: 421, type: 'triple' }
        },
        C: {
            1: { start: 101, end: 161, type: 'single' },
            2: { start: 201, end: 262, type: 'single' },
            3: { start: 301, end: 362, type: 'single' },
            4: { start: 401, end: 432, type: 'triple' }
        },
        D: {
            1: { start: 101, end: 144, type: 'single' },
            2: { start: 201, end: 245, type: 'single' },
            3: { start: 301, end: 345, type: 'single' },
            4: { start: 401, end: 423, type: 'triple' }
        },
        E: {
            1: { start: 101, end: 176, type: 'single' },
            2: { start: 201, end: 278, type: 'single' },
            3: { start: 301, end: 378, type: 'single' },
            4: { start: 401, end: 440, type: 'triple' }
        },
        F: {
            1: { start: 101, end: 132, type: 'single' },
            2: { start: 201, end: 233, type: 'single' },
            3: { start: 301, end: 333, type: 'single' },
            4: { start: 401, end: 417, type: 'triple' }
        }
    },

    // 3인실 셀 범위 (구글 시트에서)
    TRIPLE_ROOM_CELLS: {
        A: { start: 188, end: 432 },
        B: { start: 406, end: 468 },
        C: { start: 654, end: 749 },
        D: { start: 884, end: 952 },
        E: { start: 1185, end: 1304 },
        F: { start: 1403, end: 1453 }
    },

    // 담당자 목록
    MANAGERS: [
        '이영운', '김혜정', '이시우', '고승완', '남인달', '조영권', 
        '황민철', '김건희', '강지훈', '송인수', '김영현', '이상민', 
        '나정우', '홍성모', '진정현', '원현주', '김정아', '김지현', 
        '김미경', '유나경', '신규1', '신규2', '신규3', '신규4', '신규5', '신규6'
    ],

    // 학생 상태 정의
    STUDENT_STATUS: {
        NORMAL: '정상',
        OUTING: '외박',
        OUT: '외출',
        NEW: '신규',
        MOVE_OUT: '이동-',
        MOVE_IN: '이동+',
        CHECKOUT: '퇴소',
        ABSENT: '등미',
        OTHER: '기타',
        UNASSIGNED: '미배정'
    },

    // 현재원에 포함되는 상태
    CURRENT_STATUSES: ['정상', '신규', '이동+'],

    // 마이너스 카운트 상태 (현재원에서 제외)
    MINUS_STATUSES: ['외박', '퇴소'],

    // 구글 시트 열 매핑
    SHEET_COLUMNS: {
        ROOM: 1,        // B열 (기숙사 번호)
        NAME: 2,        // C열 (학생 이름)
        STATUS: 3,      // D열 (상태)
        DATE: 4,        // E열 (날짜)
        MEMO: 5,        // F열 (메모)
        PARENT_PHONE: 6,    // G열 (학부모 연락처)
        STUDENT_PHONE: 7,   // H열 (본인 연락처)
        LIBRARY_SEAT: 8,    // I열 (라이브러리 좌석)
        ADVISOR: 9,         // J열 (생활담임)
        BIRTH_DATE: 11,     // L열 (생년월일)
        GENDER: 12,         // M열 (성별)
        ENTRY_DATE: 13,     // N열 (입소일)
        HIGH_SCHOOL: 14,    // O열 (출신고교)
        CLASS: 15           // P열 (반)
    },

    // 보고 시간 제한
    REPORT_TIME: {
        START_HOUR: 22,     // 22시부터
        END_HOUR: 21,       // 다음날 21시까지
        END_MINUTE: 50      // 21시 50분까지
    },

    // API 설정
    API: {
        GOOGLE_SHEETS_ID: '1RqPfs1VbguAP85a9uswfLeUdYVAGye6GIKr0tvg4oYc',
        JANDI_WEBHOOK: 'https://wh.jandi.com/connect-api/webhook/29522216/3d9603c3b428b386c0d640758e236cb4',
        GOOGLE_API_KEY: 'AIzaSyAAaDiNQC3o779j_4pzVC4ouuZr48Y-PbY'
    },

    // UI 설정
    UI: {
        REFRESH_INTERVAL: 5 * 60 * 1000, // 5분마다 새로고침
        SEARCH_DELAY: 300,               // 검색 딜레이 (ms)
        ANIMATION_DURATION: 300          // 애니메이션 지속시간 (ms)
    }
};

// config/config.example.js - 설정 파일 예시
const CONFIG = {
    // 구글 앱스 스크립트 웹앱 URL (실제 URL로 변경 필요)
    APPS_SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
    
    // 구글 시트 ID
    GOOGLE_SHEETS_ID: '1RqPfs1VbguAP85a9uswfLeUdYVAGye6GIKr0tvg4oYc',
    
    // 잔디 웹훅 URL
    JANDI_WEBHOOK_URL: 'https://wh.jandi.com/connect-api/webhook/29522216/3d9603c3b428b386c0d640758e236cb4',
    
    // 구글 API 키
    GOOGLE_API_KEY: 'AIzaSyAAaDiNQC3o779j_4pzVC4ouuZr48Y-PbY',
    
    // 개발/운영 환경 설정
    ENVIRONMENT: 'production', // 'development' or 'production'
    
    // 디버그 모드
    DEBUG: false,
    
    // 로그 레벨
    LOG_LEVEL: 'info', // 'debug', 'info', 'warn', 'error'
    
    // 캐시 설정
    CACHE: {
        ENABLED: true,
        DURATION: 5 * 60 * 1000 // 5분
    },
    
    // 알림 설정
    NOTIFICATIONS: {
        ENABLED: true,
        AUTO_HIDE_DELAY: 5000 // 5초 후 자동 숨김
    },
    
    // 테마 설정
    THEME: {
        PRIMARY_COLOR: '#667eea',
        SECONDARY_COLOR: '#764ba2',
        ACCENT_COLOR: '#4CAF50',
        WARNING_COLOR: '#FF9800',
        ERROR_COLOR: '#F44336'
    }
};

// 환경별 설정 오버라이드
if (CONFIG.ENVIRONMENT === 'development') {
    CONFIG.DEBUG = true;
    CONFIG.LOG_LEVEL = 'debug';
    CONFIG.CACHE.ENABLED = false;
}

// config/utils.js - 유틸리티 함수
class DormitoryUtils {
    // 호실에서 성별 판단
    static getGenderFromRoom(room) {
        const building = room.charAt(0).toUpperCase();
        const buildingInfo = DORMITORY_CONFIG.BUILDINGS[building];
        return buildingInfo ? buildingInfo.gender : null;
    }

    // 호실에서 동과 층 추출
    static parseRoom(room) {
        const building = room.charAt(0).toUpperCase();
        const floor = parseInt(room.charAt(1));
        const roomNumber = room.substring(1);
        
        return {
            building,
            floor,
            roomNumber,
            fullRoom: room
        };
    }

    // 3인실 여부 판단
    static isTripleRoom(room) {
        const { building, floor } = this.parseRoom(room);
        return floor === 4; // 4층은 모두 3인실
    }

    // 현재원 상태 여부 판단
    static isCurrentStudent(status) {
        return DORMITORY_CONFIG.CURRENT_STATUSES.includes(status);
    }

    // 마이너스 카운트 상태 여부 판단
    static isMinusStatus(status) {
        return DORMITORY_CONFIG.MINUS_STATUSES.includes(status);
    }

    // 보고 가능 시간 체크
    static canReport() {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        
        // 22시부터 다음날 21시 50분까지
        return hour >= DORMITORY_CONFIG.REPORT_TIME.START_HOUR || 
               (hour < DORMITORY_CONFIG.REPORT_TIME.END_HOUR) ||
               (hour === DORMITORY_CONFIG.REPORT_TIME.END_HOUR && 
                minute <= DORMITORY_CONFIG.REPORT_TIME.END_MINUTE);
    }

    // 날짜 포맷팅
    static formatDate(date) {
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            weekday: 'short'
        });
    }

    // 시간 포맷팅
    static formatTime(date) {
        return date.toLocaleTimeString('ko-KR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    // 상태 한국어 변환
    static getStatusKorean(status) {
        const statusMap = {
            'current': '현재원',
            'outing': '외박',
            'new': '신규',
            'checkout': '퇴소',
            'moveOut': '이동-',
            'moveIn': '이동+',
            'absent': '등미',
            'other': '기타'
        };
        return statusMap[status] || status;
    }

    // 로컬 스토리지 키 생성
    static getStorageKey(type, building, floor) {
        const date = new Date().toDateString();
        return `${type}_${building}_${floor}_${date}`;
    }

    // 에러 로깅
    static logError(error, context = '') {
        if (CONFIG.DEBUG) {
            console.error(`[${context}] Error:`, error);
        }
        
        // 실제 환경에서는 에러 모니터링 서비스로 전송
        // 예: Sentry, LogRocket 등
    }

    // 성공 로깅
    static logSuccess(message, data = null) {
        if (CONFIG.DEBUG) {
            console.log(`[SUCCESS] ${message}`, data);
        }
    }

    // API 요청 래퍼
    static async apiRequest(url, options = {}) {
        try {
            const response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            this.logError(error, 'API Request');
            throw error;
        }
    }

    // 디바운스 함수
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // 쓰로틀 함수
    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// 전역으로 내보내기
if (typeof window !== 'undefined') {
    window.DORMITORY_CONFIG = DORMITORY_CONFIG;
    window.DormitoryUtils = DormitoryUtils;
}
