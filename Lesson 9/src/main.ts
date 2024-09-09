// Utility Types

// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verfied?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verfied: true,
};

recordAssignment({ ...assignGraded, verfied: true });

// Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 95 },
  Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit
type AssignmentResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignmentResult = {
  studentId: "k123",
  grade: 85,
};

type AssignmentPreview = Omit<Assignment, "grade" | "verfied">;

const preview: AssignmentPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract

type AdjustedGrade = Exclude<LetterGrades, "U">;

type HighGrades = Extract<LetterGrades, "A" | "B">;

// NonNullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnType

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

// Düzeltildi: `createNewAssign(...assignArgs)` doğru çağrı.
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with returnType of a Promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
