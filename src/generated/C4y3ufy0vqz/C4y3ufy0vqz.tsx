
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-4y3ufy0vqz',
  shadow: true,
})
export class C4y3ufy0vqz {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  