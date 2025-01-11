/**
 * Implement a method mergeData, which is used to return a unified view of each user's activities
 * by merging data from each user.
 * [
 *     { user: 8, duration: 50, equipment: ['bench'] },
 *     { user: 7, duration: 150, equipment: ['dumbbell'] },
 *     { user: 1, duration: 10, equipment: ['barbell'] },
 *     { user: 7, duration: 100, equipment: ['bike'] },
 *     { user: 7, duration: 200, equipment: ['bike'] },
 *     { user: 2, duration: 200, equipment: ['treadmill'] },
 *     { user: 2, duration: 200, equipment: ['bike'] },
 * ];
 */
export default function mergeData(sessions) {
    const userMap = new Map(); // Store sessions by user for O(1) lookups

    sessions.forEach(session => {
        const { user, duration, equipment } = session;

        if (!userMap.has(user)) {
            // First occurrence of this user
            userMap.set(user, {
                user,
                duration,
                equipment: new Set(equipment), // Use a Set for equipment deduplication
            });
        } else {
            // Merge into the existing user's session
            const existingSession = userMap.get(user);
            existingSession.duration += duration;
            equipment.forEach((item) => existingSession.equipment.add(item));
        }
    });

    // Return an array of merged sessions directly from userMap values
    return Array.from(userMap.values()).map(session => ({
        ...session,
        equipment: Array.from(session.equipment).sort(),
    }));
}